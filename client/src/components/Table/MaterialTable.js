import React, { useState } from "react";
import Table from "material-table";

export const MaterialTable = ({
  data,
  columns,
  title,
  editable,
  actions,
  onRowClick,
} = []) => {
  return (
    <div>
      <Table
        title={title}
        data={data}
        columns={columns}
        editable={editable}
        actions={actions}
        onRowClick={onRowClick}
      />
    </div>
  );
};
