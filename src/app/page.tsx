import { Navbar } from '@/components/NavBar/Navbar';
import { ResumeItem } from '@/components/ResumeItem/ResumeItem';
import { Card } from '@/components/UI/Card/Card';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Card>
        <ResumeItem
          jobTitle='Support Solutions Engineer'
          description='some description'
          tenure='2020 August - Present'
          companyName='Smartly.io'
        />
      </Card>
    </div>
  );
};

export default Home;
