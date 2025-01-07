export default function Contact(){
    return (
         

   <div className="container mt-5">
              <div className="row justify-content-center">
                  <div className="col-md-6">
                      <div className="card shadow">
                          <div className="card-header text-center bg-secondary text-white">
                              <h3 className="page-title">Contact Us!</h3>
                          </div>
                          <div className="card-body">
                              {/* <form onSubmit={handleSubmit}> */}
                              <form>
  
                                  <div className="mb-3">
                                      <label htmlFor="email" className="form-label">Email</label>
                                      <input
                                          type="email"
                                          className="form-control"
                                          id="email"
                                          name="email"
                                         
                                          required
                                      />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="password" className="form-label">Fullname</label>
                                      <input
                                          type="password"
                                          className="form-control"
                                          id="password"
                                          name="password"
                                          
                                          required
                                      />
                                  </div>
                                   <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
                                  <div className="d-grid">
                                      <button onClick="" type="submit" className="btn btn-success">
                                          Login!
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
    )

}