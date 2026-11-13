import { UsersTableService } from './../../../core/api-services/users-table/users-table.service';
import { TipologicheService } from './../../../core/api-services/tipologiche/tipologiche.service';
import { signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import {
  setLoaded,
  setLoading,
  updateState,
  withCallState,
} from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, finalize, pipe, switchMap, tap } from 'rxjs';
import { Opzioni } from '../../../core/api-services/tipologiche/tipologiche.model';
import { SirioToastService, TableData } from 'ngx-sirio-lib-20';
import { UserTableRequest } from '../../../core/api-services/users-table/users-table.model';

type TabelleState = {
  nazioniOptions: Opzioni[];
  genderOptions: Opzioni[];
  cityOptions: Opzioni[];
  usersTable: TableData[];
};

const initialState: TabelleState = {
  nazioniOptions: [],
  genderOptions: [],
  cityOptions: [],
  usersTable: [],
};

export const TabelleStore = signalStore(
  withState(initialState),
  withCallState({
    collections: ['nazioni', 'city', 'gender', 'users'],
  }),

  withMethods(
    (
      store,
      tipologicheService = inject(TipologicheService),
      usersTableService = inject(UsersTableService),
      toastService = inject(SirioToastService),
    ) => {
      const loadNazioniOptions = rxMethod<void>(
        pipe(
          tap(() =>
            updateState(store, 'Load nazioni - loading', setLoading('nazioni')),
          ),
          switchMap(() =>
            tipologicheService.getNazioni().pipe(
              tap(response => {
                updateState(store, 'Load nazioni - success', {
                  nazioniOptions: response,
                });
              }),
              catchError(() => {
                updateState(store, 'Load nazioni - error', {
                  nazioniOptions: [],
                });
                return EMPTY;
              }),
              finalize(() =>
                updateState(
                  store,
                  'Load nazioni - loaded',
                  setLoaded('nazioni'),
                ),
              ),
            ),
          ),
        ),
      );

      const loadCityOptions = rxMethod<void>(
        pipe(
          tap(() =>
            updateState(store, 'Load city - loading', setLoading('city')),
          ),
          switchMap(() =>
            tipologicheService.getCitta().pipe(
              tap(response => {
                updateState(store, 'Load city - success', {
                  cityOptions: response,
                });
              }),
              catchError(() => {
                updateState(store, 'Load city - error', {
                  cityOptions: [],
                });
                return EMPTY;
              }),
              finalize(() =>
                updateState(store, 'Load city - loaded', setLoaded('city')),
              ),
            ),
          ),
        ),
      );

      const loadGenderOptions = rxMethod<void>(
        pipe(
          tap(() =>
            updateState(store, 'Load gender - loading', setLoading('gender')),
          ),
          switchMap(() =>
            tipologicheService.getGender().pipe(
              tap(response => {
                updateState(store, 'Load gender - success', {
                  genderOptions: response,
                });
              }),
              catchError(() => {
                updateState(store, 'Load gender - error', {
                  genderOptions: [],
                });
                return EMPTY;
              }),
              finalize(() =>
                updateState(store, 'Load gender - loaded', setLoaded('gender')),
              ),
            ),
          ),
        ),
      );
      const loadUsersTable = rxMethod<UserTableRequest>(
        pipe(
          tap(() =>
            updateState(store, 'Load users - loading', setLoading('users')),
          ),
          switchMap(params =>
            usersTableService.getUsersTable(params).pipe(
              tap(response => {
                updateState(store, 'Load users - success', {
                  usersTable: response,
                });
              }),
              catchError(() => {
                updateState(store, 'Load users - success', {
                  usersTable: [],
                });
                toastService.openToast({
                  title: 'Errore',
                  text: 'Non è stato possibile contattare il server',
                  type: 'danger',
                  delay: 5000,
                });
                return EMPTY;
              }),
              finalize(() =>
                updateState(store, 'Load users - loaded', setLoaded('users')),
              ),
            ),
          ),
        ),
      );

      return {
        loadNazioniOptions,
        loadCityOptions,
        loadGenderOptions,
        loadUsersTable,
      };
    },
  ),

  withHooks(store => ({
    onInit: () => {
      store.loadNazioniOptions();
      store.loadCityOptions();
      store.loadGenderOptions();
    },
  })),
);
