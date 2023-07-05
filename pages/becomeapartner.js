import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import styles from "../styles/Join.module.css";
import { motion } from "framer-motion";

const becomeapartner = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [howCanWeHelp, setHowCanWeHelp] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");

  const { addDocument, response } = useFirestore("customerInfo");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      companyName,
      websiteURL,
      firstName,
      lastName,
      businessEmail,
      phoneNumber,
      howCanWeHelp,
      hearAboutUs,
    });
  };

  useEffect(() => {
    if (response.success) {
      console.log("ok");
      setCompanyName("1");
      setWebsiteURL("");
      setFirstName("");
      setLastName("");
      setBusinessEmail("");
      setPhoneNumber("");
      setHowCanWeHelp("");
      setHearAboutUs("");
    }
  }, [response.success]);

  return (
    <div className={styles.join_us}>
      <h3 style={{ fontSize: "1.618em", fontWeight: "400" }}>
        Request a call and demo with us!
      </h3>
      <motion.div    initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }} className={styles.join_form}>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ display: "flex", flexDirection: "column" }}>
              <span>Company name:</span>
              <input
                type="text"
                required
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
              />
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>
              <span>Website URL:</span>
              <input
                type="text"
                required
                onChange={(e) => setWebsiteURL(e.target.value)}
                value={websiteURL}
              />
            </label>
          </div>
          <h4>Point of Contact</h4>
      <div className={styles.join_style_wrap} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <label style={{display:'flex', flexDirection:'column'}}>
            <span>First name:</span>
            <input
            style={{width:'200px'}}
              type="text"
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span>Last name:</span>
            <input
              style={{width:'200px'}}
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          </div>
          <div className={styles.join_style_wrap} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span>Business email:</span>
            <input
             style={{width:'250px'}}
              type="text"
              required
              onChange={(e) => setBusinessEmail(e.target.value)}
              value={businessEmail}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span>Phone number:</span>
            <input
            style={{width:'150px'}}
              type="number"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </label>
          </div>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span>How can we help?</span>
            <textarea
              type="text"
              rows="4"
              required
              onChange={(e) => setHowCanWeHelp(e.target.value)}
              value={howCanWeHelp}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span>How did you hear about us?</span>
            <input
              type="text"
              required
              onChange={(e) => setHearAboutUs(e.target.value)}
              value={hearAboutUs}
            />
          </label>
          <div style={{float:'right'}}>
          <button className={styles.join_submit}>Submit</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default becomeapartner;
