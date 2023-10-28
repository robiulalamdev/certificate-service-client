import ThemeBreadCrumb from "../../components/commons/ThemeBreadCrumb";
import img from "../../assets/images/what-is-cos-images/bankrupcy.png";
import { Link } from "react-router-dom";

const DueProcess = () => {
  return (
    <div>
      <ThemeBreadCrumb routes="HOME / WHAT IS COS / DUE PROCESS" />
      <div className="due_process_banner_container text-center">
        <div className="container p-4 mx-auto">
          <h2>Never underestimate the simple importance</h2>
          <h1>of due process.</h1>
        </div>

        <div className="small_paragraph">
          <p>
            While the stuffing and mailing of envelopes may be a ministerial
            task that doesn't take much forethought or challenge to accomplish,
            without proper service, the Court cannot obtain jurisdiction over
            the parties.
          </p>
        </div>

        <div className="container p-4 mx-auto">
          <p className="long_paragraph">
            Since the Bankruptcy Courts have the power of ‘long arm’
            jurisdiction, service is an absolute necessity as a person is not
            bound by a judgment in a litigation to which he or she has not been
            made a party by service ofprocess. Mason v. Genisco Tech. Corp, 960
            F.2d 849, 851 (9th Cir. 1992) quoting Hansberry v. Lee, 311U.S. 32,
            40, 61 S.Ct. 115, 117, 85 L.Ed. 22 (1940).
          </p>
        </div>
      </div>

      <section className="container p-4 mx-auto mb-5">
        <div className="bankruptcy_section row align-items-center">
          <img className="col-12 col-lg-6" src={img} alt="" />
          <div className="col-12 col-lg-6 p-3">
            <p>
              The bankruptcy code requires regular first class service by mail
              and in some cases, certified mail, under Fed. Rule. Bankr. Proc.
              7004.Failure to properly service your bankruptcy documents can
              result at best, delayed hearings and the costs of reservice. At
              worst, it can mean the loss of a critical motion, dismissal of a
              case, or ...See More
            </p>
          </div>
        </div>

        <Link to="/">
          <div className="click_here_to_register mx-auto my-5">
            <p>Click here to register now and get a free account today!</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default DueProcess;
