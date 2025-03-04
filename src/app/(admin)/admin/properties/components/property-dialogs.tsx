"use client";
import { useProperty } from "../context/property-context";
import { PropertyActionDialog } from "./property-action-dialog";
// import { UsersDeleteDialog } from "./users-delete-dialog";
// import { UsersInviteDialog } from './users-invite-dialog'

export function PropertyDialog() {
  const { open, setOpen, currentRow, setCurrentRow } = useProperty();
  return (
    <>
      <PropertyActionDialog
        key="user-add"
        open={open === "add"}
        onOpenChange={() => setOpen("add")}
      />
      {/* 
      <UsersInviteDialog
        key='user-invite'
        open={open === 'invite'}
        onOpenChange={() => setOpen('invite')}
      /> */}

      {currentRow && (
        <>
          <PropertyActionDialog
            key={`user-edit-${currentRow.id}`}
            open={open === "edit"}
            onOpenChange={() => {
              setOpen("edit");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          />

          {/* <UsersDeleteDialog
            key={`user-delete-${currentRow.id}`}
            open={open === "delete"}
            onOpenChange={() => {
              setOpen("delete");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          /> */}
        </>
      )}
    </>
  );
}
