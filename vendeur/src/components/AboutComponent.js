import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderLeader({leader}){

    return(
        <Media >
                <Media left middle>
                    <Media object src={leader.image} alt={leader.name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <Media >{leader.designation}</Media>

                    <p>{leader.description}</p>
                </Media>
        </Media>
       );
}


function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={leader}></RenderLeader>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem ><Link to="/home">About Us</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>« Passionné de cuisine depuis toujours, il m’a fallu attendre d’avoir
                            trente-trois ans pour enfin sauter le pas et aller au bout de mon rêve, ouvrir
                            mon propre restaurant : l’âge du Christ - plus sûrement que celui de la raison,
                            on garde ça pour plus tard ! - peut-être faut-il y voir un signe quand on jette
                            son dévolu sur une bâtisse séculaire couvée du regard par la Cathédrale
                            Notre-Dame…

                            Chez Big Ben, il n’y a d’autre ambition que celle de proposer une cuisine
                            sincère, ancrée dans les saisons, authentique mais moderne, joyeuse et
                            généreuse, aux inspirations larges. Arrosée de bons vins, nous la voulons au
                            choix dégustée, avalée, dévorée, engloutie (c’est vous qui voyez) dans une
                            ambiance décontractée, simple et bon enfant. Que vous ayez trente minutes ou
                            deux heures, peu importe. Franchissez la porte du restaurant et nous mettons
                            tout en œuvre pour que ces trente minutes ou ces deux heures vous donnent envie
                            de revenir. Le jeune restaurateur que je suis ne voit pas de plus belle
                            récompense au travail sincèrement fait ! »</p>
<p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
            
        </div>
    );
}

export default About;    