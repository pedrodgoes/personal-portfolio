import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img12.jpg";
import projImg22 from "../assets/img/project-img22.png";
import projImg23 from "../assets/img/project-img23.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Criação e manutenção páginas completas, dashboards.",
      description: "Desenvolvimento de páginas completas, landing pages para empresas do polo indústrial de manaus; onde consistia em ler dados de sensores dessas empresas e tranformá-los de forma apresentável tanto em pa´ginas Web quanto para dispositovos móveis.",
      imgUrl: projImg1,
    },
  ];

  const projects2 = [
    {
      title: "Plataforma de vagas",
      description: "Desenvolvimento de uma Plataforma de vagas, contendo cadastro de dados pessoais, acadêmicos e experiêcnias profissionais. Web e mobile.",
      imgUrl: projImg2,
    },
    {
      title: "Plataforma de Ouvidoria Municipal",
      description: "Desenvolvimento da Plataforma de Ouvidoria Municipal, contendo sugestões, críticas, denúncias, e etc. Web e mobile.",
      imgUrl: projImg22,
    },
    {
      title: "Portal acadêmico da Universidade de Minas Gerais.",
      description: "Desenvolvimento do Portal acadêmico, contendo cadastro de aulas, notas, alunos, professores, monitores. Web e mobile.",
      imgUrl: projImg23,
    },
  ];

  const projects3 = [
    {
      title: "Portal Cliente Hostgator",
      description: "Criação e desenvolvimento dos componentes deste portal, do mais simples botão à páginas inteiras das seções do portal; abordando os mais diversos aspectos de UI/UX e responsividade de layout.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Aqui coloco os projetos mais destacados nas minhas últimas 3 experiências e suas respectivas descrições.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Desenvolvedor Full Stack Jr</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Desenvolvedor Full Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Desenvolvedor Frontend</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
