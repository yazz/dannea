module dannea::start;

use sui::object::{Self, UID};
use sui::transfer;
use sui::tx_context::{Self, TxContext};

public struct USDD has key, store {
    id: UID,
    value: u64
}


fun init(ctx: &mut TxContext) {
    let admin = USDD {
        id: object::new(ctx),
        value: 0,
    };

    transfer::transfer(admin, ctx.sender());
}

