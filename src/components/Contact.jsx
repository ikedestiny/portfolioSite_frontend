import { MdContactPhone } from "react-icons/md";
import '../style/Contact.css'; // Import the custom CSS file

export default function Contact() {
    return (
        <div className="contact-home">
            <div className="card-header text-center bg-secondary text-white">
                <h3 className="page-title">Contact Us! <MdContactPhone style={{ color: "white" }} /></h3>
            </div>
            <div className="card">

                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fullname" className="form-label">Fullname</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                name="fullname"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="button-group">
                            <button type="submit" className="btn btn-success">
                                Submit!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
