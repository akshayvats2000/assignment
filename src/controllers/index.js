module.exports.home = async (req, res) => {
    return res.render('interviewExperience', {
        title: 'Interview Experiences of top tech companies for practice',
        companies: ['amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft'],
        roles: ['Senior Developer', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist', 'Junior Developer', 'DevOPs', 'Data Scientist'],
        locations: ['Ghaziabad', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida', 'Delhi', 'Noida'],
        moreFilters: ['amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft','amazon', 'dell', 'microsoft']
    })
}

module.exports.create = async (req, res) => {
    const data = new Data(req.body);
    await data.save();
    res.send(data);
}