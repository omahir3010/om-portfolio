import Image from 'next/image';

import OmCoverPicture from '/public/images/logos/om-cover-pic.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={OmCoverPicture}
              unoptimized={true}
              alt="Fullpose of Om"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
          I am Om, a skilled professional with a diverse set of technical capabilities. With proficiency in VueJs, Vanilla Js, NodeJs, and AWS, I bring two years of valuable experience to the table. My expertise lies in the dynamic intersection of web development and DevOps, where I excel in crafting web applications with a keen eye for detail, utilizing both plain and Tailwind CSS for visually appealing user interfaces.
          </Typography>
          <Typography>
          Throughout my career, I have actively worked with various AWS services, showcasing my comprehensive understanding of cloud architecture. From AWS CloudFront and AWS API Gateway to AWS DynamoDB, AWS CodeBuild, and AWS CodePipeline, I leverage these tools to seamlessly blend front-end development with server-side technologies. My versatility extends to Vue3, Tailwind CSS, JavaScript, AWS Cognito, OKTA, and serverless architecture, allowing me to tackle diverse challenges in the tech landscape.
          </Typography>
          <Typography>
          A highlight of my achievements includes leveraging AWS Lambda for multiple purposes, serving as an authorizer and adeptly generating signed URLs. My familiarity with the AWS-SDK underscores my proficiency in seamlessly integrating AWS services into applications. With a two-year track record of success, I am poised to contribute my skills to innovative projects in web development, DevOps, and AWS integration.
            
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Engineering
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">DevOps Engineer</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
