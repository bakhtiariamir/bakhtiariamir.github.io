import React, { Component } from 'react';
import ResumeTimeLine from './ResumeTimeLine';
import SkillComponent from './Skill';

class Resume extends Component {
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      // var work = this.props.data.work.map(function(work){
      //   return <div key={work.company}><h3>{work.company}</h3>
      //       <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      //       <p>{work.description}</p>
      //   </div>
      // })
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
      let methodologies = [];
      if (this.props.data != null ) methodologies = this.props.data.skills.filter(skill => skill.category == "Methodology");
      let backends = [];
      if (this.props.data != null ) backends = this.props.data.skills.filter(skill => skill.category == "Backend");
      let databases = [];
      if (this.props.data != null ) databases = this.props.data.skills.filter(skill => skill.category == "Database");
      let frontends = [];
      if (this.props.data != null ) frontends = this.props.data.skills.filter(skill => skill.category == "Frontend");
      let sourceControls = [];
      if (this.props.data != null ) sourceControls = this.props.data.skills.filter(skill => skill.category == "SourceControl");
      let concepts = [];
      if (this.props.data != null ) concepts = this.props.data.skills.filter(skill => skill.category == "Concept");
      let businesses = [];
      if (this.props.data != null ) businesses = this.props.data.skills.filter(skill => skill.category == "Business");
      let learnings = [];
      if (this.props.data != null ) learnings = this.props.data.skills.filter(skill => skill.category == "Learning");
      let languages = [];
      if (this.props.data != null ) languages = this.props.data.skills.filter(skill => skill.category == "Language");

      debugger;
    return (
      
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
           {this.props.data != null && <ResumeTimeLine work={this.props.data.work} />}           
        </div>
    </div>

    <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Methodology</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {methodologies != null && <SkillComponent skills={methodologies} />}
				</div>
			</div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Backend</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {backends != null && <SkillComponent skills={backends} />}
				</div>
			</div>
      </div>
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Database</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {databases != null && <SkillComponent skills={databases} />}
				</div>
			</div>
      </div>
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>FrontEnd</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {frontends != null && <SkillComponent skills={frontends} />}
				</div>
			</div>
      </div>
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>SourceControl</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {sourceControls != null && <SkillComponent skills={sourceControls} />}
				</div>
			</div>
      </div>      
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Concept</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {concepts != null && <SkillComponent skills={concepts} />}
				</div>
			</div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Business</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {businesses != null && <SkillComponent skills={businesses} />}
				</div>
			</div>
      </div>
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Language</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {learnings != null && <SkillComponent skills={languages} />}
				</div>
			</div>
      </div>      
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Learning</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
            {learnings != null && <SkillComponent skills={learnings} />}
				</div>
			</div>
      </div>

   </section>
    );
    }
    else 
    return <div></div>;
  }
}

export default Resume;
