import React, { useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import "ag-grid-community/styles/ag-theme-alpine.css";
import styled from "@emotion/styled";
import { delete_icon, edit_icon } from "../assets/icons/form";
import { ToggleSwitch } from "../components/common/form/ToggleButton";
import { Link } from "react-router-dom";
import {
  deleteEmployee,
  getAllEmployees,
  toggleEmployeeStatus,
} from "../utils/services";
import PageHeader from "../components/common/PageHeader";
import { DateRenderer } from "../utils/DateRender";

const TableWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .ag-theme-alpine {
    width: 100%;
    height: 100%;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  svg path {
    fill: #79bbda;
  }

  &:hover svg path {
    fill: #3796f0;
  }

  &.delete {
    svg path {
      fill: red;
    }
    &:hover svg path {
      fill: #ac0000;
    }
  }
`;

const StatusRenderer = styled.span`
  color: ${(props) => (props.status === "active" ? "green" : "#d30202")};
  background-color: ${(props) =>
    props.status === "active" ? "#94ff948f" : "#ff949467"};
  padding: 2px 10px;
  text-transform: capitalize;
  border-radius: 20px;
  font-size: 12px;
`;

const EmployeeList = () => {
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState([]);

  const handleDelete = async (data) => {
    const confirmed = confirm(`Are you sure you want to delete ${data.name}`);
    if (confirmed) {
      await deleteEmployee(data.id)
        .then((res) => {
          console.log("res", res);
          fetchAllEmployee();
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const handleToggleStatus = async (data) => {
    const status = data.status == "active" ? "inactive" : "active";
    await toggleEmployeeStatus(data.id, { status })
      .then(() => fetchAllEmployee())
      .catch((err) => {
        console.log("err", err);
      });
  };

  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth: 50, filter: false },
    { headerName: "Name", field: "name", flex: 1, filter: true },
    { headerName: "Email", field: "email", flex: 1 },
    { headerName: "Phone", field: "phone" },
    { headerName: "Department", field: "department", flex: 1 },
    { headerName: "Designation", field: "designation", flex: 1 },
    { headerName: "Joining Date", field: "joining_date", flex: 1,
      cellRenderer: (params)=>DateRenderer(params?.value)
     },
    {
      headerName: "Status",
      field: "status",
      
      cellRenderer: (params) => {
        return (
          <StatusRenderer status={params.value}>{params.value}</StatusRenderer>
        );
      },
    },
    {
      headerName: "Actions",
      field: "actions",
      maxWidth: 140,
      filter: false,
      cellRenderer: (params) => (
        <ActionWrapper>
          <ActionButton>
            <Link to={`/employee/${params.data.id}`}>{edit_icon}</Link>
          </ActionButton>
          <ActionButton
            className="delete"
            onClick={() => handleDelete(params.data)}
          >
            {delete_icon}
          </ActionButton>
          <ToggleSwitch
            isChecked={params.data.status === "active"}
            onToggle={() => handleToggleStatus(params.data)}
          />
        </ActionWrapper>
      ),
    },
  ];

  const fetchAllEmployee = async () => {
    await getAllEmployees()
      .then((res) => {
        console.log("res", res);
        setRowData(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    fetchAllEmployee();
  }, []);

  return (
    <TableWrapper>
      <PageHeader />
      <div className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          modules={[AllCommunityModule]}
          pagination={true}
          paginationPageSize={10}
          getRowId={(params) => params.data.id}
          defaultColDef={{
            filter: true,
            floatingFilter: true,
            resizable: true,
            sortable: true,
            minWidth: 120,
          }}
        />
      </div>
    </TableWrapper>
  );
};

export default EmployeeList;
