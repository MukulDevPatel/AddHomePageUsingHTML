window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal ES6 features
const createInnerHtml = () => {
    const headerHtml = "<th>Profile Pic</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" alt="" src="${empPayrollData._profilePic}" style="border-radius: 50%; height: 50px; width: 50px;"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/deleteIcon.png">
            <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="../assets/edit.png">
        </td>
      </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

//JSON object to load data in our table
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Mukul dev Patel',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Sales',
            ],
            _salary: '48000',
            _startDate: '1 August 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/face2.jpg'
        },
        {
            _name: 'Anita',
            _gender: 'Female',
            _department: [
                'Sales'
            ],
            _salary: '40000',
            _startDate: '1 August 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/face1.jpg'
        },
        {
            _name: 'Saurabh raj',
            _gender: 'Male',
            _department: [
                'Engineering'
            ],
            _salary: '48000',
            _startDate: '1 October 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/face5.jpg'
        },
        {
            _name: 'Ajay kumar',
            _gender: 'Male',
            _department: [
                'Finance'
            ],
            _salary: '42000',
            _startDate: '1 June 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/face6.jpg'
        },
        {
            _name: 'Kriti',
            _gender: 'Female',
            _department: [
                'HR'
            ],
            _salary: '50000',
            _startDate: '1 May 2017',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/face3.jpg'
        },
        {
            _name: 'Emma jane',
            _gender: 'Female',
            _department: [
                'Others'
            ],
            _salary: '40000',
            _startDate: '1 February 2018',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/face4.jpg'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}