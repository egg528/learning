import React from 'react';
import Layout from "@theme/Layout";
import Navigator from "@site/src/components/resume/Navigator";
import Introduce from "@site/src/components/resume/Introduce";
import WorkExperience from "@site/src/components/resume/WorkExperience";
import OtherExperience from "@site/src/components/resume/OtherExperience";
import Skill from "@site/src/components/resume/Skill";
import Certificate from "@site/src/components/resume/Certificate";

export default function Home(): JSX.Element {
    return (
        <Layout>
            <div className="container resume">
                <Navigator/>
                <Introduce/>
                <WorkExperience/>
                <OtherExperience/>
                <Skill/>
                <Certificate/>
            </div>
        </Layout>
    );
}
