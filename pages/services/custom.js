import styles from "../../styles/custom.module.css";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import {motion} from "framer-motion";
import Image from "next/image";

const custom = () => {
  return (
    <div className={styles.custom_section}>
      <div className={styles.custom_hero}>
        <div className={styles.custom_hero_wrap}>
          <motion.div   initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{  duration: 0.4 }} className={styles.custom_hero_text}>
            <h2 style={{ paddingBottom: "12px" }}>
              Best practice custom functionality and integrations
            </h2>
            <p>
              Best in standard software features and functionality while
              remaining efficient and completely customizable
            </p>
            <div>
              <button className={styles.custom_hero_btn}>
                Get started now
              </button>
            </div>
          </motion.div>
          <motion.video   initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.4 }}
            className={styles.custom_hero_video}
            style={{ width: "auto", height: "400px" }}
            type="video/mp4"
            playsInline
            source
            src="/custom_hero.mp4"
            autoPlay
            loop
            muted
          ></motion.video>
        </div>
      </div>
      <motion.div   initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }} className={styles.custom_two}>
        <div className={styles.custom_two_title}>
          <h2 style={{ paddingBottom: "12px" }}>
            Custom software for your business success
          </h2>
          <p>
            Custom software can be designed and developed to automate specific
            tasks, streamline workflows, and integrate with other existing
            software systems
          </p>
        </div>
        <div className={styles.custom_two_wrap}>
          <div className={styles.custom_two_box_one}>
            <StoreMallDirectoryIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "10px", fontWeight: "500" }}>
              Custom ecommerce integration
            </p>
            <p>
             
              providing features and functionalities that are not available in
              off-the-shelf software
            </p>
          </div>
          <div className={styles.custom_two_box_two}>
            <DatasetLinkedIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "10px", fontWeight: "500" }}>
              Sleamless data integration
            </p>
            <p>Can be adapted and modified to accommodate new new databases</p>
          </div>
          <div className={styles.custom_two_box_three}>
            <RotateRightIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "10px", fontWeight: "500" }}>
              Solution that match
            </p>
            <p>
              Synergising your brand with software to improvement efficiency and
              cost-effectiveness
            </p>
          </div>
        </div>
      </motion.div>
      <div className={styles.custom_three}>
        <motion.div   initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }} className={styles.custom_three_wrap}>
          <Image width={300} height={300}
            src="/custom_three.png"
            alt="custom_three"
            className={styles.custom_three_img}
          />
          <div className={styles.custom_three_text}>
            <h2 style={{ paddingBottom: "12px" }}>Cloud systems and architecture</h2>
            <p >We consult with our clients to determine the architecture of their cloud infrastructure in order to provide the right cloud solutions for their business needs and to help them achieve value faster.</p>
          <p style={{paddingTop:'10px', paddingBottom:'10px'}}>We have partnered with global leading cloud providers such as Amazon Web Services and Google Cloud Platform to ensure the implementation of best practices, as well as to ensure high levels of security and reliability for our clients.</p>
          <p>Our cloud engineers have years of experience across various industries, providing them with an innovative and state-of-the-art skillset that allows us to cater to our clients' needs effectively.</p>
          </div>
        </motion.div>
      </div>
      <div className={styles.custom_four}>
        <motion.div   initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }} className={styles.custom_four_wrap}>
            <div className={styles.custom_four_text}>
                <h2 style={{paddingBottom:'12px'}}>Our dedicated software team at your disposal</h2>
                
                <p style={{paddingBottom:'10px'}}>Everything is meticulously hand coded, ensuring client have more control with no messy code that slows down.</p>
                <p style={{paddingBottom:'10px'}}>When it comes to software and the web, the better quality and more organised programs always win.</p>
                <p >No need to spend millions on a development team, use our and bring your imagination to life.</p>
                </div>
                <Image width={300} height={300} src="/custom_four_img.png" alt="custom_four" className={styles.custom_four_img}/>
                </motion.div>
                </div>
    </div>
  );
};

export default custom;
