const Company = require('../models/company')
const companyController = {}

// Create Company Profile
companyController.create = (req, res) => {
    const body = req.body
    const company = new Company(body)

    company.save()
    .then((company) => {
        res.json(company)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Show company profile
companyController.list = (req, res) => {
    Company.find()
    .then((company) => {
        res.json(company)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Show company by_id
companyController.show = (req, res) => {
    const id = req.params.id
    
    Company.findById(id)
    .then((company) => {
        res.json(company)
    })
    .catch((err) => {
        res.json(err)
    })
}

//Update company profile
companyController.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Company.findByIdAndUpdate({_id: id}, body, {new: true, runValidators: true})
    .then((company) => {
        res.json(company)
    })
    .catch((err) => {
        res.json(err)
    })
}

//Delete company profile
companyController.destroy = (req, res) => {
    const id = req.params.id
    Company.findByIdAndDelete(id)
    .then((company) => {
        res.json(company)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports = companyController