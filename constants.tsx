import { 
  Code2, 
  Cpu, 
  Lightbulb, 
  Share2, 
  Search, 
  BarChart3, 
  Rocket, 
  CheckCircle2, 
  Layers,
  Zap
} from 'lucide-react';
import { NavItem, Service, Founder, ProcessStep, Value } from './types';

export const COMPANY_NAME = "R² Solutions Group";
export const SLOGAN = "Mais do que tecnologia. Soluções com propósito.";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Contato', href: '#contato' },
];

export const MANIFESTO_TEXTS = [
  "A gente acredita que tecnologia não é sobre código. É sobre pessoas.",
  "Acreditamos que processos complicados existem porque ninguém parou para pensar direito neles.",
  "Não criamos soluções por criar. Criamos porque algo precisa funcionar melhor.",
  "Questionamos o óbvio. Automatizamos o repetitivo. Simplificamos o complexo.",
  "Se existe um jeito melhor de fazer, a gente encontra."
];

export const SERVICES: Service[] = [
  {
    id: 'sites',
    title: 'Sites, Sistemas & Apps',
    description: 'Criamos sites, aplicativos e ferramentas digitais pensados para resolver problemas reais.',
    icon: Code2,
    items: [
      'Sites institucionais e landing pages',
      'Aplicativos web e mobile',
      'Ferramentas internas sob medida',
      'Sistemas simples, funcionais e escaláveis'
    ]
  },
  {
    id: 'automacao',
    title: 'Tecnologia & Automação',
    description: 'Automatizamos processos, conectamos sistemas e eliminamos tarefas manuais que consomem tempo.',
    icon: Cpu,
    items: [
      'Automações de processos',
      'Integrações entre plataformas',
      'Dashboards e soluções baseadas em dados',
      'Ferramentas de gestão e controle'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoria Estratégica',
    description: 'Antes de construir qualquer coisa, a gente pensa. Tecnologia sem estratégia vira custo.',
    icon: Lightbulb,
    items: [
      'Diagnóstico de processos',
      'Estruturação de soluções digitais',
      'Apoio à tomada de decisão',
      'Visão estratégica de negócio + tecnologia'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description: 'Tecnologia boa precisa ser bem comunicada. Nada de postar por postar. Tudo tem objetivo.',
    icon: Share2,
    items: [
      'Gestão completa de redes sociais',
      'Criação de posts e reels',
      'Planejamento de marketing digital',
      'Posicionamento e identidade de marca'
    ]
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Rafael Rosa',
    role: 'Tecnologia, Dados & Estratégia',
    imageUrl: '/assets/rafael.png',
    description: [
      'Formado em Ciências Contábeis e com MBA pela FIAP, construiu carreira nas maiores auditorias do mundo (PwC, KPMG, EY) e no Grupo Casas Bahia.',
      'Desenvolvedor e solucionador nato. Enxerga problemas como desafios técnicos.',
      'Foco em criar ferramentas, automações e sistemas que trazem eficiência real.'
    ],
    skills: ['Auditoria', 'Dados', 'Desenvolvimento', 'Estratégia Corporativa']
  },
  {
    name: 'Rebeca Muniz',
    role: 'Criatividade, Comunicação & Marketing',
    imageUrl: '/assets/rebeca.png',
    description: [
      'Formada em Publicidade e Propaganda, atua há anos com marketing digital e posicionamento de marcas. Fundadora da Muniz Social Media, possui carteira sólida de clientes e se destaca pela criatividade, agilidade e visão estratégica.',
      'Especialista em Instagram, com forte domínio de estratégias de crescimento e posicionamento. Focada em alavancar tráfego orgânico por meio de conteúdos virais, consistentes e alinhados ao público certo.',
      'Sua atuação vai além de posts bonitos: envolve planejamento, identidade, narrativa e crescimento real. Na R², garante que toda solução tenha forma, linguagem e impacto.'
    ],
    skills: ['Marketing Digital', 'Instagram Growth', 'Conteúdo Viral', 'Branding', 'Estratégia']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendemos',
    description: 'Mergulhamos no problema sem achismos e sem soluções prontas.'
  },
  {
    number: '02',
    title: 'Desenhamos',
    description: 'Criamos a arquitetura da solução ideal unindo técnica e estratégia.'
  },
  {
    number: '03',
    title: 'Construímos',
    description: 'Implementação ágil e focada em qualidade e performance.'
  },
  {
    number: '04',
    title: 'Evoluímos',
    description: 'Acompanhamos o resultado. Solução boa é solução viva.'
  }
];

export const VALUES: Value[] = [
  { title: 'Clareza', description: 'Comunicação transparente.', icon: Search },
  { title: 'Eficiência', description: 'Fazer mais com menos.', icon: Zap },
  { title: 'Criatividade', description: 'Soluções fora da caixa.', icon: Lightbulb },
  { title: 'Resultado', description: 'Compromisso com o fim.', icon: CheckCircle2 },
  { title: 'Evolução', description: 'Melhoria contínua.', icon: BarChart3 },
];

export const PROBLEMS_SOLVED = [
  "Processos manuais e lentos",
  "Falta de controle e visão de dados",
  "Ideias de sites ou apps que não saem do papel",
  "Sistemas que não se conversam",
  "Redes sociais sem estratégia"
];