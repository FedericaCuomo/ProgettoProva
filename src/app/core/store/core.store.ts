import { UserProfile } from '../api-services/profilo/profilo.model';
import { signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import {
  setLoaded,
  setLoading,
  updateState,
  withCallState,
} from '@angular-architects/ngrx-toolkit';
import { ProfileService } from '../api-services/profilo/profilo.service';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, finalize, pipe, switchMap, tap } from 'rxjs';

type CoreState = {
  userInfo: UserProfile | undefined;
};

const initialState: CoreState = {
  userInfo: undefined,
};

export const CoreStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withCallState({
    collections: ['profilo'],
  }),

  withMethods((store, profileService = inject(ProfileService)) => {
    const loadUserInfo = rxMethod<void>(
      pipe(
        tap(() =>
          updateState(
            store,
            'Load Conoscenza - loading',
            setLoading('profilo'),
          ),
        ),
        switchMap(() =>
          profileService.getUser().pipe(
            tap(response => {
              updateState(store, 'Load profile - success', {
                userInfo: response,
              });
            }),
            catchError(() => {
              updateState(store, 'Load profile - error', {
                userInfo: undefined,
              });
              return EMPTY;
            }),
            finalize(() =>
              updateState(store, 'Load profilo - loaded', setLoaded('profilo')),
            ),
          ),
        ),
      ),
    );

    return {
      loadUserInfo,
    };
  }),

  withHooks(store => ({
    onInit: () => {
      store.loadUserInfo();
    },
  })),
);
