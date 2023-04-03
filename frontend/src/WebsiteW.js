import React, { useState, useEffect } from "react";
import HeroW from "./components/website/HeroW";
import AboutW from "./components/website/AboutW";
import ExperienceW from "./components/website/ExperienceW";
import SkillsW from "./components/website/SkillsW";
import WorkW from "./components/website/WorkW";
import TestimonialsW from "./components/website/TestimonialsW";
import ContactW from "./components/website/ContactW";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function WebsiteW() {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(`http://localhost:5000/api/user/website/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }
  return (
    <>
      {data && (
        <>
          <HeroW fullName={data.contact[0].fullName} about={data.about[0]} />
          <AboutW title={data.title} />
          <ExperienceW exp={data.experience} />
          <SkillsW skills={data.skill} />
          <WorkW work={data.work} />
          <TestimonialsW feedback={data.testimonials} />
          <ContactW
            email={data.contact[0].email}
            phone={data.contact[0].phone}
          />
        </>
      )}
    </>
  );
}