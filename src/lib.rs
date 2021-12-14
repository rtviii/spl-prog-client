use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, pubkey::Pubkey, msg,
    log::{},

};

// Program ID: FhNxpGghxtSB5G32F7XJHLHfFUxxYtbXqMDM7TWk6R3x
entrypoint!(process_instruction);

fn process_instruction(
    program_id      : &Pubkey,
    accounts        : &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {

    let key:&u8 = instruction_data.first().unwrap();
    match key {
        0  => msg!("got zero"),
        1  => msg!("got one"),
        65 => msg!("got big ascii A"),
        _  => msg!("something else, {:?}", instruction_data),
    };

    msg!(
        "processed instruction  {} : {} accounts, data={:?}",
        program_id,
        accounts.len(),
        instruction_data
    );

    Ok(())
}