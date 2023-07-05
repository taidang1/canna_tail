import styles from "../../styles/ecommerce.module.css";
import { motion } from "framer-motion";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import EscalatorIcon from "@mui/icons-material/Escalator";
import SportsIcon from "@mui/icons-material/Sports";
import { Pagination, FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CategoryIcon from "@mui/icons-material/Category";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import DiscountIcon from "@mui/icons-material/Discount";
import WifiChannelIcon from "@mui/icons-material/WifiChannel";
import Image from "next/image";

const ecommerce = () => {
  return (
    <div className={styles.ecommerce_section}>
      <div className={styles.ecommerce_hero}>
        <div className={styles.ecommerce_hero_wrap}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={styles.ecommerce_hero_text}
          >
            <h2>Ecommerce solutions tailored to your needs, how we compare</h2>
            <p>
              Dont settle for third party ecommerce plugins, we ll explore why
            </p>
            <div>
              <button className={styles.ecommerce_hero_btn}>
                Get a consultation
              </button>
            </div>
          </motion.div>
          <Image width={500} height={500}
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={styles.ecommerce_hero_img}
            src="/ecommerce_hero_img.png"
            alt="ecommerce"
          />
        </div>
      </div>
      <motion.div   initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }} className={styles.ecommerce_two}>
        <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
          Growing popularity of ecommerce
        </h2>
        <div className={styles.ecommerce_two_wrap}>
          <div className={styles.ecommerce_two_box_one}>
            <JoinFullIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginRight: '12px'
              }}
            />
            <div style={{display:'flex', flexDirection:'column'}}>
            <p style={{ fontWeight: "500" }}>Full control</p>
            <p>Developed to meet your specific needs and requirements of your business.</p>
          </div>
          </div>
          <div className={styles.ecommerce_two_box_two}>
            <EscalatorIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginRight: '12px'
              }}
            />
                <div style={{display:'flex', flexDirection:'column'}}>
            <p style={{ fontWeight: "500" }}>Scalable</p>
            <p>Created with scalability in mind, ecommerce software that grows and evolves with your business.</p>
          </div>
          </div>
          <div className={styles.ecommerce_two_box_three}>
            <SportsIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginRight: '12px'
              }}
            />
                            <div style={{display:'flex', flexDirection:'column'}}>

            <p style={{ fontWeight: "500" }}>Better start</p>
            <p>Start with a unique and superior ecommerce system developed with features to benefit your business and customers.</p>
          </div>
          </div>
        </div>
      </motion.div>
      <div className={styles.ecommerce_three}>
        <motion.div   initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }} className={styles.ecommerce_three_wrap}>
          <Image width={300} height={300}
            className={styles.ecommerce_three_img}
            src="/your_domain.png"
            alt="ecommerce"
          />
          <div className={styles.ecommerce_three_text}>
            <h2 style={{ paddingBottom: "20px" }}>
              Ecommerce under one domain
            </h2>
            <p style={{ paddingBottom: "12px" }}>
              Having your own domain integrated throughout your site boosts your
              business seo and makes you more appearable on google.
            </p>
            <p style={{ paddingBottom: "12px" }}>
              Full integration greatly improves your site speed, dont settle for
              third party plugins that slow down your store
            </p>
            <p style={{ paddingBottom: "12px" }}>
              Look more professional and give your customers a streamlined user
              experience
            </p>
          </div>
        </motion.div>
      </div>
      <div className={styles.ecommerce_four}>
        <div className={styles.ecommerce_four_text}>
          <h2>Our ecommerce features</h2>
          <p>Preview our ecommerce features</p>
        </div>
<motion.div   initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.4 }} className={styles.ecommerce_four_swiper_wrap}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className={styles.swiper_ecommerce}
        >
          <SwiperSlide className={styles.swiper_slider_ecommerce}>
            <CurrencyExchangeIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
              {" "}
              Orders, Exchanges, and Returns
            </p>
            <p>
              Aside from the standard order management that comes with ecommerce
              platforms, Medusa also provides an easy and automated way to
              manage swaps, returns, and claims.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_ecommerce}>
            <Diversity3Icon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
              Customers and Customer Groups
            </p>
            <p>
              Part of the Customers domain is also Customer Groups. Customer
              groups allow you to put together a set of customers for business
              purposes. For example, you can create a VIP customer group for
              customers that you want to give special discounts.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_ecommerce}>
            <CategoryIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
              Products and Collections
            </p>
            <p>
              You can create products and edit their details. That includes
              basic info, sales channels, inventory management, prices
              management, and much more.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_ecommerce}>
            <SouthAmericaIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>Region</p>
            <p>
              Regions represent different countries that your ecommerce store
              serves customers in. You can combine more than one country in the
              same region and give them the same settings, or you can create a
              different region for each country and add settings specific to
              each of them.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_ecommerce}>
            <ElectricalServicesIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>Plugins</p>
            <p>
              Plugins run within the same process as the core Medusa server
              eliminating the need for extra server capacity, infrastructure,
              and maintenance. As a result, plugins can use all other services
              as dependencies and access the database.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_ecommerce}>
            <DiscountIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
              PriceList and Discounts
            </p>
            <p>
              Advanced pricing for products with conditions based on the amount
              in the cart or promotions and discounts.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_ecommerce}>
            <WifiChannelIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
              Sales Channels
            </p>
            <p>
              Sales Channels are multiple channels that you can sell your
              products through. For example, you can have a sales channel for
              the web storefront, another for the mobile app, and another for
              selling across social media platforms.
            </p>
          </SwiperSlide>
        </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default ecommerce;
