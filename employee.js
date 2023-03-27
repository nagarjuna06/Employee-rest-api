const Employee = require('./employeeSchema');
const getEmployeeList = async (req, res) => {
    const { name = '', designation = '' } = req.query
    try {
        if (name !== '') {
            const allData = await Employee.find({ name: { '$regex': name } })
            if (allData.length === 0) {
                res.send({ msg: 'No data Found' })
            }
            else {
                res.send(allData)
            }
        }
        else if (designation !== '') {
            const allData = await Employee.find({ designation: { '$regex': designation } })
            if (allData.length === 0) {
                res.send({ msg: 'No data Found' })
            }
            else {
                res.send(allData)
            }
        }
        else {
            const allData = await Employee.find()
            res.send(allData)
        }
    }
    catch (err) {
        res.send({ msg: err.message })
    }
}

const addEmployee = async (req, res) => {
    const { name, email, phone, age, designation } = req.body
    try {
        const newData = new Employee({ name, email, phone, age, designation });
        await newData.save()
        res.send({ msg: name + " employee added successfully!" })
    }
    catch (err) {
        res.send({ msg: err.message })
    }
}
const updateEmployeeData = async (req, res) => {
    const { id } = req.params
    try {
        const { name = '',
            email = '',
            phone = '',
            age = '',
            designation = '' } = req.body
        const data = { name, email, phone, age, designation }
        let updatedData = {}
        for (let i in data) {
            if (data[i] !== '') {
                updatedData[i] = data[i]
            }
        }
        await Employee.findOneAndUpdate({ _id: id }, { $set: updatedData })
        const newData = await Employee.findById(id)
        res.send(newData)
    }
    catch (err) {
        res.send({ msg: err.message })
    }
}

const deleteEmployee = async (req, res) => {
    const { id } = req.params
    try {
        await Employee.findOneAndRemove({ _id: id })
        res.send({ msg: " employee deleted successfully" })
    }
    catch (err) {
        res.send({ msg: err.message })
    }
}

module.exports = {
    addEmployee,
    getEmployeeList,
    updateEmployeeData,
    deleteEmployee
}