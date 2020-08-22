import React, {useState} from 'react'
import StudentForm from "./AddStudentForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import Header from '../../components/Header';
import * as studentService from "../../services/employeeService";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))



export default function Employees() {
    const [records, setRecords] = useState(studentService.getAllEmployees())
    const classes = useStyles();
    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            studentService.insertEmployee(employee)
        else{
            studentService.updateEmployee(employee)
            console.log("employeeeeeeeeeeeee", employee)
        }
            
        resetForm()
        setRecords(studentService.getAllEmployees())
    }

    return (
        <>
        <Header/>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <StudentForm 
                 recordForEdit={null}
                 addOrEdit={addOrEdit} />
            </Paper>
        </>
    )
}
