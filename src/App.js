import React from "react";
import { Box, Container, Typography, Avatar, Paper, Chip, Link } from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const aboutMe = "I am a passionate Full Stack Developer with experience building web applications using modern technologies. I love solving complex problems and working on challenging projects.";

const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Mittal Institute of Technology Bhopal",
    year: "2014 - 2018"
  }
];

const experience = [
  {
    title: "Full Stack Developer",
    company: "CDN Softwere Solucation",
    duration: "2022 - Present",
    description: "Worked on building scalable web applications using React, Node.js, and MongoDB."
  },
  {
    title: "Frontend Developer Intern",
    company: "Innovate Labs",
    duration: "2021 - 2022",
    description: "Built responsive UI components and collaborated on frontend architecture."
  }
];

const skills = {
  backend: ["Node Js", "Express Js", "Nest Js","PHP","Laravel","CI","AWS"],
  frontend: ["React", "JavaScript", "HTML", "CSS", "MUI", "Redux","Jquery","Next JS","Bootstrap"],
  database: ["MongoDB", "MySQL", "PostgreSQL","Graphql"]
};

const skillColors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6"];

export default function Portfolio() {
  return (
    <Box sx={{ bgcolor: "#0f172a", color: "white", minHeight: "100vh", fontFamily: 'Roboto, sans-serif' }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Header */}
        <Box textAlign="center" mb={5}>
          <Avatar
            alt="Your Name"
            src="https://via.placeholder.com/150"
            sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
          />
          <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>Son Singh Rajput</Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Developer',
                2000,
                'Node.js Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Typography>
        </Box>

        {/* About Me */}
         {/* About Me with Hover Animation */}
         <motion.div
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 }
          }}
        >
        <Paper sx={{ p: 4, mb: 5, bgcolor: "#1e293b", color: 'white' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>About Me</Typography>
          <Typography fontSize={"1.1rem"}>{aboutMe}</Typography>
        </Paper>
        </motion.div>
        {/* Education */}
        <motion.div
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 }
          }}
        >
        <Paper sx={{ p: 4, mb: 5, bgcolor: "#1e293b", color: 'white' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Education</Typography>
          {education.map((edu, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{edu.degree}</Typography>
              <Typography>{edu.institution}</Typography>
              <Typography variant="body2" sx={{ color: 'lightgray' }}>{edu.year}</Typography>
            </Box>
          ))}
        </Paper>
        </motion.div>
        {/* Experience */}
        <Paper sx={{ p: 4, mb: 5, bgcolor: "#1e293b", color: 'white' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Experience</Typography>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Box mb={4} p={3} bgcolor="#334155" borderRadius={2} color="white">
                <Typography variant="h6">{exp.title}</Typography>
                <Typography sx={{ color: '#93c5fd' }}>{exp.company}</Typography>
                <Typography variant="body2" sx={{ color: 'lightgray' }}>{exp.duration}</Typography>
                <Typography sx={{ color: '#d1d5db' }}>{exp.description}</Typography>
              </Box>
            </motion.div>
          ))}
        </Paper>

        {/* Skills */}
        <motion.div
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 }
          }}
        >
        <Paper sx={{ p: 4, mb: 5, bgcolor: "#1e293b", color: 'white' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Skills</Typography>

          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Backend</Typography>
            {skills.backend.map((skill, index) => (
              <Chip key={index} label={skill} sx={{ m: 0.5, bgcolor: skillColors[index % skillColors.length], color: "white", pointerEvents: "none" }} />
            ))}
          </Box>

          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Frontend</Typography>
            {skills.frontend.map((skill, index) => (
              <Chip key={index} label={skill} sx={{ m: 0.5, bgcolor: skillColors[(index + 2) % skillColors.length], color: "white", pointerEvents: "none" }} />
            ))}
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Database</Typography>
            {skills.database.map((skill, index) => (
              <Chip key={index} label={skill} sx={{ m: 0.5, bgcolor: skillColors[(index + 4) % skillColors.length], color: "white", pointerEvents: "none" }} />
            ))}
          </Box>
        </Paper>
        </motion.div>

        {/* Contact */}
        <motion.div
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
          transition: { duration: 0.3 }
        }}
      >
        <Paper sx={{ p: 3, mt: 4, bgcolor: "#1e293b", color: 'white' }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="center">Contact Me</Typography>

          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" px={2}>
            {/* Email - Left */}
            <Box display="flex" alignItems="center" sx={{ flex: 1, justifyContent: { xs: "center", sm: "flex-end" }, mb: { xs: 1, sm: 0 } }}>
              
              <Link href="mailto:sonsinghrajput9575@gmail.com" color="inherit" underline="hover">
              <EmailIcon sx={{ mr: 1, color: '#38bdf8' }} />
              </Link>
            </Box>

            {/* Phone - Center */}
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
              <PhoneIcon sx={{ mr: 1, color: '#38bdf8' }} />
              <Typography variant="body2">+91-9575748089</Typography>
            </Box>

            {/* LinkedIn - Right */}
            
            <Box display="flex" alignItems="center" sx={{ flex: 1, justifyContent: { xs: "center", sm: "flex-start" }, mt: { xs: 1, sm: 0 } }}>
              <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" color="inherit" underline="hover">
              <LinkedInIcon sx={{ mr: 1, color: '#38bdf8' }} />
              </Link>
            </Box>
          </Box>
        </Paper>
  </motion.div>

      </Container>
    </Box>
  );
}
