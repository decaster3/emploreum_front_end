pragma solidity ^0.4.0;
contract EmploreumMain {

    struct Employee{
        uint32 id;
        address employeeAddr; // адрес работника
        string firstName; //имя работника
        string lastName; //фамилия работника
        uint jobCounter; //количество работ работника
        address[] jobProposals;
        uint32[] history; //история работы работника
    }

 mapping(address => Employee) employee_list;
 mapping(uint32 => address) employee_addresses;


 function registerEmployee(
        address employeeAddr,
        string firstName,
        string lastName,
        string passport)
 {
     employee_list[employeeAddr].employeeAddr = employeeAddr;
        employee_list[employeeAddr].firstName = firstName;
        employee_list[employeeAddr].lastName = lastName;

 }

    function getEmployee(address employee) constant returns(string, string, uint) {
        Employee e = employee_list[employee];
        return (
            e.firstName,
            e.lastName,
            e.jobCounter
        );
    }

}
