import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Header from '../common/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FindRickshaw from './FindRickshaw';
import Main from './Main';
import Sidebar from './Sidebar';
import FooterSection from '../common/Footer';


const sections = [
  { title: 'Hariharpara', url: '#' },
  { title: 'Karkhana', url: '#' },
  { title: 'Daltanpur', url: '#' },
  { title: 'Hospital', url: '#' },
  { title: 'Hosenpur', url: '#' },
  { title: 'Noshipur', url: '#' },
  { title: 'Rukunpur', url: '#' },
  { title: 'Choa', url: '#' },
  { title: 'Gobargara', url: '#' },
  { title: 'Dasturpara', url: '#' },
];
const mainFeaturedPost = {
  title: 'Life is short and the world is wide.',
  description:
    "Wherever you go, go with all your heart.",
  image: 'https://source.unsplash.com/1600x900/?rickshaw',
  imageText: 'main image description',
  linkText: '',
};

const FindRickshawdata = [
  {
    title: 'Find a E-Rickshaw',
    //date: 'Nov 12',
    //description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://lohiaauto.com/main/images/narayan/comfort.png',
    imageLabel: 'Image Text',
  },
  {
    title: 'Free Contribute',
    // date: 'Nov 11',
    // description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://lohiaauto.com/main/images/narayan/comfort.png',
    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="TukTukWala" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {FindRickshawdata.map((post) => (
              <FindRickshaw key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <div style={{marginTop:"5rem"}}>
      <FooterSection/>

      </div>
    </React.Fragment>
  );
}
