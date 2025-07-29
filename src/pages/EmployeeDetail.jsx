import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Input,
  Radio,
  Select,
  Textarea,
} from "../components/common/form/FormFields";
import { Error, Label } from "../components/common/form/StyledFormComponents";
import Button from "../components/common/Button";
import { left_icon, save_icon } from "../assets/icons/form";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../utils/services";
import { useNavigate, useParams } from "react-router-dom";
import { DEPARTMENTS } from "../utils/constant";
import PageHeader from "../components/common/PageHeader";

const Wrapper = styled.div`
 margin: 20px;

  .form-wrapper{
     padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px #b9b9b9;
  }
`;

const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 20px;

  @media screen and (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
  }
`;

const initialState = {
  name: "",
  email: "",
  phone: "",
  salary: "",
  dob: "",
  joining_date: "",
  designation: "",
  department: "",
  gender: "",
  address: "",
};

const EmployeeDetail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialState);
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (id) {
      await updateEmployee(id, formData)
        .then((res) => {
          console.log("res", res);
          setError(initialState);
          navigate("/");
        })
        .catch((err) => setError(err.response.data.errors));
    } else {
      await createEmployee(formData)
        .then((res) => {
          console.log("res", res);
          setError(initialState);
          navigate("/");
        })
        .catch((err) => setError(err.response.data.errors));
    }
  };

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((res) => {
          console.log("res", res);
          setFormData(res);
        })
        .catch((err) => console.log("err", err));
    }
  }, [id]);

  const buttonProps = {
    text: "Back to list",
    icon: left_icon,
    url: "/"
  }

  return (
    <Wrapper>
    
      <PageHeader title={id ? "Edit Employee": "Create Employee"} buttonProps={buttonProps}/>
    <div className="form-wrapper">
      <FieldWrapper>
        <Input
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={error?.name || ""}
        />
        <Input
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={error?.email || ""}
        />
        <Input
          type="tel"
          name="phone"
          label="Mobile"
          value={formData.phone}
          onChange={handleChange}
          error={error?.phone || ""}
        />
        <Input
          type="number"
          name="salary"
          label="Salary"
          value={formData.salary}
          onChange={handleChange}
          error={error?.salary || ""}
        />
        <Input
          type="date"
          name="dob"
          label="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          error={error?.dob || ""}
        />
        <Input
          type="date"
          name="joining_date"
          label="Joining Date"
          value={formData.joining_date}
          onChange={handleChange}
          error={error?.joining_date || ""}
        />
        <Input
          type="text"
          name="designation"
          label="Designation"
          value={formData.designation}
          onChange={handleChange}
          error={error?.designation || ""}
        />
        <Select
          name="department"
          label="Department"
          value={formData.department}
          onChange={handleChange}
          options={DEPARTMENTS}
          error={error?.department || ""}
        />
        <div>
          <Label>Gender</Label>
          <div style={{ display: "flex", gap: "10px" }}>
            <Radio
              label="Male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <Radio
              label="Female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <Radio
              label="Other"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
            />
          </div>
          {error?.gender && <Error>{error?.gender}</Error>}
        </div>
        <Textarea
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          error={error?.address || ""}
        />
      </FieldWrapper>

      <Button onClick={handleSubmit} type="submit">
        {save_icon} {id ? "Update" : "Save"}
      </Button>
    </div>
    </Wrapper>
  );
};

export default EmployeeDetail;
