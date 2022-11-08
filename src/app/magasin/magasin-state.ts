import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProduct, DeleteProduct } from "./magasin-action";
import { MagasinStateModel } from "./magasin-state-model";

@State<MagasinStateModel>({
    name: 'products',
    defaults: {
        products: [],
    },
})

@Injectable()
export class MagasinState {
    @Selector()
    static getNbProducts(state: MagasinStateModel) {
        return state.products.length
    }

    @Selector()
    static getListProducts(state: MagasinStateModel) {
        return state.products;
    }

    @Selector()
    static getTotalPrice(state: MagasinStateModel) {
        return state.products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
    }

    @Action(AddProduct)
    add(
        { getState, patchState }: StateContext<MagasinStateModel>,
        { payload }: AddProduct
    ) {
        const state = getState();
        patchState({
            products: state.products.find((t) => t.id === payload.id)
                ? state.products.map((t) =>
                    t.id === payload.id ? { ...t, quantity: t.quantity + 1 } : t
                )
                : [...state.products, { ...payload, quantity: 1 }],
        });
    }

    @Action(DeleteProduct)
    delete(
        { getState, patchState }: StateContext<MagasinStateModel>,
        { payload }: DeleteProduct
    ) {
        const state = getState();
        patchState({
            products: state.products.find((t) => t.id === payload.id)?.quantity === 1
                ? state.products.filter((t) => t.id !== payload.id)
                : state.products.map((t) =>
                    t.id === payload.id ? { ...t, quantity: t.quantity - 1 } : t
                ),
        });
    }
}