window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal ES6 features
const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" alt="" src="../assets/face2.jpg" style="border-radius: 50%; height: 50px; width: 50px;"></td>
        <td>Mukul Dev Patel</td>
        <td>Male</td>
        <td><div class='dept-label'>Engineer</div>
            <div class='dept-label'>Sales</div>
        </td>
        <td>30000</td>
        <td>1 January 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/deleteIcon.png">
            <img id="1" onclick="update(this)" alt="edit" src="../assets/edit.png">
        </td>
    </tr>`;
    document.querySelector('#display').innerHTML = innerHtml;
}