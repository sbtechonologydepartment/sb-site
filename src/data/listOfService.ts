import imageCodeService from '../assets/services/code-service.jpg'
import imageSociaMediaService from '../assets/services/social-media-manager.webp'
import imageConsultancyService from '../assets/services/consultoria-empresarial.jpg'
import imageIndividualMentoringService from '../assets/services/mentoria-individual.jpg'
import imageGroupMentoringService from '../assets/services/mentoria-grupo.png'
import imageBehavioralAnalysis from '../assets/services/analise-comportamental.jpg'
import imageTeamTraining from '../assets/services/treinamento-equipe.jpeg'
import imageOrganizationalStructure from '../assets/services/estrutura-organizacional.jpg'

export interface IServices {
    track: string
    title: string
    text: string
    imageSrc: string
}

export const listOfServices: IServices[][] = [
  [
    {
      track: 'Escola de négocios',
      title: 'Mentoria individual',
      text: 'Sessões particulares e personalizadas com foco no desenvolvimento de habilidades empresariais, autoconhecimento, estratégias de negócios e crescimento pessoal. Ideal para empreendedores, líderes e profissionais que buscam transformação.',
      imageSrc: imageIndividualMentoringService
    },
    {
      track: 'Escola de négocios',
      title: 'Mentoria em grupo',
      text: 'Programa de desenvolvimento focado em grupos de empreendedores ou líderes que buscam crescer juntos, compartilhando experiências e aprendendo estratégias para transformar seus negócios.',
      imageSrc: imageGroupMentoringService
    },
    {
      track: 'Escola de négocios',
      title: 'Consultoria empresarial',
      text: 'Destinado para empresas que buscam crescimento, aumento de eficiência e melhoria em processos. Atuamos de forma estratégica, oferecendo soluções para aumentar o desempenho, resolver desafios operacionais e definir um plano de ação para o futuro da empresa.',
      imageSrc: imageConsultancyService
    },
    {
      track: 'Escola de négocios',
      title: 'Perfil comportamental',
      text: 'Ferramenta poderosa para entender o comportamento, os pontos fortes e as áreas de desenvolvimento de indivíduos e equipes. A análise fornece insights profundos sobre como melhorar a comunicação, a produtividade e a colaboração no ambiente de trabalho.',
      imageSrc: imageBehavioralAnalysis
    },
    {
      track: 'Escola de négocios',
      title: 'Estrutura organizacional',
      text: 'Ajudamos as empresas a criarem uma estrutura organizacional eficiente e compatível com seus objetivos. Desde a definição de funções e responsabilidades até a criação de fluxos de trabalho e processos internos, garantimos que sua estrutura esteja otimizada para os desafios do mercado.',
      imageSrc: imageOrganizationalStructure
    },
    {
      track: 'Escola de négocios',
      title: 'Treinamento de Equipes',
      text: 'Treinamento focado no desenvolvimento de habilidades essenciais para as equipes, como liderança, comunicação, vendas, trabalho em equipe, entre outros. Voltado para maximizar o potencial dos colaboradores para o desempenho organizacional.',
      imageSrc: imageTeamTraining
    }
  ],
  [
    {
      track: 'Agência de marketing',
      title: 'Desenvolvimento de site',
      text: 'Produção de sites otimizados e ajustados para seu modelo de negócio, garantimos a presença da sua empresa nos meios digitais.',
      imageSrc: imageCodeService
    },
    {
      track: 'Agência de marketing',
      title: 'Social media',
      text: 'texto exemploa',
      imageSrc: imageSociaMediaService
    }
  ]
]
