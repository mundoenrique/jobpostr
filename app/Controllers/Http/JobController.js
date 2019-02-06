'use strict'
const Job = use('App/Models/Job')

class JobController {
  async home ({view}) {
    // create job
    /*
    const job = new Job

    job.title = 'My job title'
    job.link = 'https://google.com'
    job.description = 'My job description'

    await job.save()
    */
    const jobs = await Job.all()

    return view.render('index', { jobs: jobs.toJSON() })
  }
}

module.exports = JobController
