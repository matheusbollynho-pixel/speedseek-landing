import { useState } from 'react'
import {
  CheckCircle, BarChart3, MessageCircle, Star, ChevronDown,
  Zap, Shield, Clock, Users, FileText, TrendingUp, ArrowRight,
  Phone, Calendar, Package, Search, Bell
} from 'lucide-react'
import './index.css'

const WA_LINK = 'https://wa.me/5575988388629?text=Ol%C3%A1!%20Tenho%20interesse%20no%20SpeedSeek%20OS'
const RED = '#E3000F'
const DARK = '#0f1117'
const CARD = '#13161f'
const BORDER = 'rgba(255,255,255,0.08)'
const MUTED = '#9ca3af'

/* ── helpers ── */
const Section = ({ children, bg = DARK, id = '' }: { children: React.ReactNode; bg?: string; id?: string }) => (
  <section id={id} style={{ background: bg, padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,40px)' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>{children}</div>
  </section>
)

const SectionHeader = ({ tag, title, subtitle }: { tag?: string; title: string; subtitle?: string }) => (
  <div style={{ textAlign: 'center', marginBottom: 56 }}>
    {tag && (
      <span style={{ display: 'inline-block', background: 'rgba(227,0,15,0.12)', border: `1px solid rgba(227,0,15,0.3)`, color: '#f87171', padding: '5px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
        {tag}
      </span>
    )}
    <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>{title}</h2>
    {subtitle && <p style={{ color: MUTED, fontSize: 17, maxWidth: 560, margin: '0 auto' }}>{subtitle}</p>}
  </div>
)

/* ── Dashboard Mockup ── */
const DashboardMockup = () => (
  <div style={{ background: '#1a1d27', borderRadius: 16, border: `1px solid ${BORDER}`, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.5)', maxWidth: 680, margin: '0 auto' }}>
    {/* top bar */}
    <div style={{ background: '#0f1117', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
      <div style={{ flex: 1, background: '#1a1d27', borderRadius: 4, height: 22, marginLeft: 8, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
        <span style={{ fontSize: 11, color: '#4b5563' }}>speedseek.os/dashboard</span>
      </div>
    </div>
    {/* content */}
    <div style={{ padding: 20 }}>
      {/* stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'OS Abertas', value: '24', color: '#3b82f6' },
          { label: 'Em Andamento', value: '11', color: '#f59e0b' },
          { label: 'Concluídas', value: '187', color: '#10b981' },
          { label: 'Faturamento', value: 'R$18k', color: RED },
        ].map((s, i) => (
          <div key={i} style={{ background: '#0f1117', borderRadius: 8, padding: '10px 12px', border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 10, color: MUTED, marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>
      {/* OS list */}
      <div style={{ background: '#0f1117', borderRadius: 8, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
        <div style={{ padding: '8px 12px', borderBottom: `1px solid ${BORDER}`, fontSize: 11, fontWeight: 600, color: MUTED, display: 'grid', gridTemplateColumns: '1fr 1fr 80px 70px' }}>
          <span>CLIENTE</span><span>SERVIÇO</span><span>STATUS</span><span>VALOR</span>
        </div>
        {[
          { client: 'João Silva', service: 'Troca de óleo', status: 'Concluída', statusColor: '#10b981', value: 'R$120' },
          { client: 'Maria Santos', service: 'Revisão completa', status: 'Andamento', statusColor: '#f59e0b', value: 'R$380' },
          { client: 'Pedro Lima', service: 'Freios dianteiros', status: 'Aberta', statusColor: '#3b82f6', value: 'R$250' },
        ].map((row, i) => (
          <div key={i} style={{ padding: '8px 12px', borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none', display: 'grid', gridTemplateColumns: '1fr 1fr 80px 70px', alignItems: 'center', fontSize: 11 }}>
            <span style={{ color: '#e5e7eb', fontWeight: 600 }}>{row.client}</span>
            <span style={{ color: MUTED }}>{row.service}</span>
            <span style={{ color: row.statusColor, fontWeight: 600 }}>{row.status}</span>
            <span style={{ color: '#e5e7eb' }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ── Feature Card ── */
const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '28px 24px', transition: 'border-color 0.2s' }}>
    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(227,0,15,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
      <span style={{ color: RED }}>{icon}</span>
    </div>
    <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{title}</h3>
    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
  </div>
)

/* ── Step Card ── */
const StepCard = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ width: 52, height: 52, borderRadius: '50%', background: RED, color: '#fff', fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{n}</div>
    <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{title}</h3>
    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
  </div>
)

/* ── Benefit Card ── */
const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(227,0,15,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ color: RED }}>{icon}</span>
    </div>
    <div>
      <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{title}</h4>
      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
    </div>
  </div>
)

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: DARK, color: '#f3f4f6', minHeight: '100vh' }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(15,17,23,0.92)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src="/logo.jpg" alt="SpeedSeek OS" style={{ height: 38, borderRadius: 6 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="#planos" style={{ color: MUTED, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Planos</a>
            <a href="#funcionalidades" style={{ color: MUTED, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Recursos</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ background: RED, color: '#fff', padding: '8px 18px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Falar com vendas
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 100, background: DARK }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,40px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          {/* left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(227,0,15,0.1)', border: '1px solid rgba(227,0,15,0.25)', color: '#f87171', padding: '5px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' as const, marginBottom: 24 }}>
              <Zap size={13} /> Sistema para oficinas
            </div>
            <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 20 }}>
              Controle todas as ordens de serviço da sua oficina{' '}
              <span style={{ color: RED }}>em um só lugar</span>
            </h1>
            <p style={{ color: MUTED, fontSize: 18, lineHeight: 1.65, marginBottom: 36 }}>
              Crie OS, gerencie clientes, acompanhe mecânicos e emita relatórios. Tudo pelo celular, sem instalação.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: RED, color: '#fff', padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                Testar grátis <ArrowRight size={18} />
              </a>
              <a href="#demo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `1px solid rgba(255,255,255,0.15)`, color: '#fff', padding: '14px 28px', borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>
                Ver demonstração
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, marginTop: 36 }}>
              {[['500+', 'OS geradas'], ['98%', 'Satisfação'], ['24h', 'Suporte']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{v}</div>
                  <div style={{ fontSize: 12, color: MUTED }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* right - mockup */}
          <DashboardMockup />
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <Section bg={CARD}>
        <SectionHeader
          tag="O problema"
          title="Sua oficina ainda usa papel ou planilhas?"
          subtitle="Isso gera retrabalho, informações perdidas e clientes insatisfeitos."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {[
            { icon: '📋', text: 'OS perdidas ou preenchidas errado' },
            { icon: '📞', text: 'Cliente ligando sem saber o status do serviço' },
            { icon: '💸', text: 'Sem controle do que entrou e saiu no caixa' },
            { icon: '🔧', text: 'Mecânicos sem organização das tarefas do dia' },
          ].map((p, i) => (
            <div key={i} style={{ background: DARK, border: `1px solid rgba(227,0,15,0.2)`, borderRadius: 12, padding: '20px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 24 }}>{p.icon}</span>
              <p style={{ color: '#d1d5db', fontSize: 14, lineHeight: 1.5 }}>{p.text}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 32, color: MUTED, fontSize: 15 }}>
          O SpeedSeek OS resolve tudo isso em um sistema simples, acessível de qualquer dispositivo.
        </p>
      </Section>

      {/* ── COMO FUNCIONA ── */}
      <Section>
        <SectionHeader
          tag="Como funciona"
          title="Comece em minutos, sem complicação"
          subtitle="Três passos simples para sua oficina funcionar no sistema"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 40, position: 'relative' as const }}>
          <StepCard n="1" title="Crie sua conta" desc="Acesse pelo navegador, sem instalar nada. Configure sua oficina em minutos." />
          <StepCard n="2" title="Cadastre clientes e serviços" desc="Adicione seus clientes, mecânicos e comece a criar ordens de serviço." />
          <StepCard n="3" title="Gerencie tudo em tempo real" desc="Acompanhe o status de cada OS, envie PDF pelo WhatsApp e veja os relatórios." />
        </div>
      </Section>

      {/* ── FUNCIONALIDADES ── */}
      <Section bg={CARD} id="funcionalidades">
        <SectionHeader
          tag="Recursos"
          title="Tudo que sua oficina precisa"
          subtitle="Ferramentas pensadas para o dia a dia de quem trabalha com mecânica"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          <FeatureCard icon={<FileText size={22} />} title="Ordens de Serviço" desc="Crie, edite e acompanhe OS completas com cliente, veículo, serviços e valores. Status em tempo real." />
          <FeatureCard icon={<Users size={22} />} title="Gestão de Clientes" desc="Cadastro completo com histórico de atendimentos, veículos e contatos. Nunca perca informação." />
          <FeatureCard icon={<BarChart3 size={22} />} title="Relatórios e Fluxo de Caixa" desc="Veja quanto sua oficina fatura, quais serviços são mais pedidos e o desempenho da equipe." />
          <FeatureCard icon={<MessageCircle size={22} />} title="WhatsApp Automático" desc="Envie PDF da OS, pesquisa de satisfação e lembretes de manutenção direto pelo WhatsApp." />
          <FeatureCard icon={<Bell size={22} />} title="Lembretes de Manutenção" desc="O sistema avisa o cliente quando chegar a hora da próxima revisão. Fidelização no piloto automático." />
          <FeatureCard icon={<Search size={22} />} title="Histórico Completo" desc="Busque qualquer atendimento passado por cliente, data, placa ou tipo de serviço." />
          <FeatureCard icon={<Package size={22} />} title="Controle de Materiais" desc="Registre as peças utilizadas em cada OS e acompanhe o que foi gasto em cada serviço." />
          <FeatureCard icon={<Star size={22} />} title="Pesquisa de Satisfação" desc="Colete avaliações dos clientes automaticamente e identifique pontos de melhoria." />
          <FeatureCard icon={<Calendar size={22} />} title="Agenda de Serviços" desc="Organize as OS por data e distribua tarefas entre os mecânicos da equipe." />
        </div>
      </Section>

      {/* ── BENEFÍCIOS ── */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <SectionHeader tag="Benefícios" title="Por que escolher o SpeedSeek OS?" />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 32 }}>
              <BenefitCard icon={<Zap size={20} />} title="Mais organização, menos erro" desc="Chega de OS rasgada, cliente sem resposta ou serviço esquecido. Tudo registrado e acessível." />
              <BenefitCard icon={<TrendingUp size={20} />} title="Mais produtividade" desc="Mecânicos sabem o que fazer, atendentes têm as informações na mão. Menos tempo perdido." />
              <BenefitCard icon={<Shield size={20} />} title="Controle total" desc="Saiba exatamente quantas OS estão abertas, o que está pendente e quanto já faturou no mês." />
              <BenefitCard icon={<Clock size={20} />} title="Histórico completo" desc="Todo atendimento registrado para sempre. Consulte qualquer OS de anos atrás em segundos." />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { value: '3x', label: 'mais rápido criar uma OS' },
              { value: '100%', label: 'acessível pelo celular' },
              { value: '0', label: 'instalação necessária' },
              { value: '24h', label: 'suporte disponível' },
            ].map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: RED, marginBottom: 8 }}>{s.value}</div>
                <div style={{ color: MUTED, fontSize: 14 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DEMO / SCREENSHOTS ── */}
      <Section bg={CARD} id="demo">
        <SectionHeader
          tag="Sistema"
          title="Veja como é simples usar"
          subtitle="Interface limpa e intuitiva, pensada para funcionar no celular"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
          {[
            { title: 'Dashboard', icon: <BarChart3 size={32} color={RED} />, desc: 'Visão geral da oficina: OS abertas, faturamento, equipe e alertas' },
            { title: 'Nova Ordem de Serviço', icon: <FileText size={32} color={RED} />, desc: 'Preencha cliente, veículo, serviços e valores em menos de 1 minuto' },
            { title: 'Gestão de Clientes', icon: <Users size={32} color={RED} />, desc: 'Histórico completo de cada cliente com todos os atendimentos anteriores' },
            { title: 'Relatórios', icon: <TrendingUp size={32} color={RED} />, desc: 'Gráficos e números do desempenho da oficina por período' },
          ].map((s, i) => (
            <div key={i} style={{ background: DARK, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ background: '#1a1d27', padding: 32, display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', minHeight: 160, gap: 12 }}>
                {s.icon}
                <span style={{ fontSize: 12, color: MUTED, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' as const }}>{s.title}</span>
              </div>
              <div style={{ padding: 20 }}>
                <h4 style={{ fontWeight: 700, marginBottom: 6, fontSize: 15 }}>{s.title}</h4>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: RED, color: '#fff', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            <Phone size={18} /> Solicitar demonstração ao vivo
          </a>
        </div>
      </Section>

      {/* ── PLANOS ── */}
      <Section id="planos">
        <SectionHeader
          tag="Planos"
          title="Preço justo para qualquer oficina"
          subtitle="Sem taxa de adesão. Cancele quando quiser."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, alignItems: 'start' }}>
          {[
            {
              name: 'Básico', price: 'R$ 79', period: '/mês',
              desc: 'Para oficinas pequenas que estão começando',
              features: ['Ordens de serviço ilimitadas', 'Até 2 usuários', 'PDF da OS', 'Histórico de clientes', 'Suporte via WhatsApp'],
              highlight: false,
            },
            {
              name: 'Profissional', price: 'R$ 129', period: '/mês',
              desc: 'O plano mais completo para oficinas em crescimento',
              features: ['Tudo do Básico', 'Usuários ilimitados', 'Fluxo de caixa', 'Relatórios completos', 'Pesquisa de satisfação', 'Mensagens automáticas WhatsApp', 'Lembretes de manutenção'],
              highlight: true,
            },
            {
              name: 'Premium', price: 'R$ 199', period: '/mês',
              desc: 'Para redes de oficinas e quem quer o máximo',
              features: ['Tudo do Profissional', 'Domínio próprio', 'Logo personalizada', 'Suporte prioritário', 'Onboarding personalizado'],
              highlight: false,
            },
          ].map((plan, i) => (
            <div key={i} style={{
              borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column' as const,
              background: plan.highlight ? RED : CARD,
              border: plan.highlight ? 'none' : `1px solid ${BORDER}`,
              position: 'relative' as const,
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute' as const, top: -14, left: '50%', transform: 'translateX(-50%)', background: '#facc15', color: '#000', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 999, letterSpacing: 1, textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>
                  MAIS POPULAR
                </div>
              )}
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{plan.name}</h3>
              <p style={{ fontSize: 13, marginBottom: 20, color: plan.highlight ? 'rgba(255,255,255,0.8)' : MUTED }}>{plan.desc}</p>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 46, fontWeight: 900 }}>{plan.price}</span>
                <span style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.7)' : MUTED }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 32, flex: 1, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <CheckCircle size={16} color={plan.highlight ? '#fff' : RED} style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center', padding: '13px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  background: plan.highlight ? '#fff' : RED,
                  color: plan.highlight ? RED : '#fff',
                }}>
                Começar agora
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, color: MUTED, fontSize: 13 }}>
          Teste grátis por 7 dias. Sem cartão de crédito.
        </p>
      </Section>

      {/* ── DEPOIMENTO ── */}
      <Section bg={CARD}>
        <SectionHeader tag="Depoimentos" title="Quem usa aprova" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {[
            { text: 'O SpeedSeek OS transformou minha oficina. Antes era tudo no papel, hoje controlo tudo pelo celular. Recomendo muito!', name: 'João Carlos', role: 'Proprietário, BA Motos' },
            { text: 'A pesquisa de satisfação automática foi o diferencial. Meus clientes adoram receber feedback e eu sei onde melhorar.', name: 'Rafael Lobão', role: 'Gestor, Lobão Motos' },
            { text: 'Em 10 anos de oficina nunca tive um sistema tão fácil de usar. Qualquer funcionário aprende em minutos.', name: 'Carlos Andrade', role: 'Mecânico proprietário' },
          ].map((t, i) => (
            <div key={i} style={{ background: DARK, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={16} color="#facc15" fill="#facc15" />)}
              </div>
              <p style={{ color: '#d1d5db', fontSize: 15, lineHeight: 1.65, fontStyle: 'italic', marginBottom: 20 }}>"{t.text}"</p>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ color: MUTED, fontSize: 12 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <SectionHeader tag="Dúvidas" title="Perguntas frequentes" />
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
          {[
            { q: 'Preciso instalar algum programa?', a: 'Não. O SpeedSeek OS funciona direto no navegador do celular, tablet ou computador. Sem instalação.' },
            { q: 'Posso testar antes de pagar?', a: 'Sim! Oferecemos 7 dias de teste gratuito. Entre em contato pelo WhatsApp e configuramos tudo para você.' },
            { q: 'Funciona para moto e carro?', a: 'Sim. O sistema foi desenvolvido para qualquer tipo de oficina mecânica, motos ou carros.' },
            { q: 'Meus dados ficam seguros?', a: 'Sim. Dados armazenados em nuvem com backup automático. Você nunca perde nenhuma informação.' },
            { q: 'Como é feito o pagamento?', a: 'Aceitamos Pix e cartão de crédito. Plano mensal sem fidelidade, cancele quando quiser.' },
            { q: 'Tenho suporte para configurar?', a: 'Sim! Nosso time te ajuda a configurar o sistema e treinar a equipe via WhatsApp.' },
          ].map((item, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', background: 'none', border: 'none', color: '#f3f4f6', fontWeight: 600, fontSize: 15, cursor: 'pointer', textAlign: 'left' as const }}>
                {item.q}
                <ChevronDown size={18} style={{ transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 18px', color: MUTED, fontSize: 14, lineHeight: 1.7 }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: RED, padding: 'clamp(60px,8vw,100px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, marginBottom: 16, color: '#fff' }}>
            Comece a organizar sua oficina hoje.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, marginBottom: 40 }}>
            Mais de 500 ordens de serviço gerenciadas. Junte-se às oficinas que já usam o SpeedSeek OS.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: RED, padding: '16px 40px', borderRadius: 14, fontWeight: 800, fontSize: 18, textDecoration: 'none' }}>
            <MessageCircle size={22} /> Começar agora
          </a>
          <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>7 dias grátis • Sem cartão de crédito • Suporte incluso</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#080a0f', borderTop: `1px solid ${BORDER}`, padding: '40px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 20 }}>
          <img src="/logo.jpg" alt="SpeedSeek OS" style={{ height: 34, borderRadius: 6 }} />
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
            <a href="#funcionalidades" style={{ color: MUTED, textDecoration: 'none', fontSize: 13 }}>Recursos</a>
            <a href="#planos" style={{ color: MUTED, textDecoration: 'none', fontSize: 13 }}>Planos</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: MUTED, textDecoration: 'none', fontSize: 13 }}>Contato</a>
          </div>
          <p style={{ color: '#4b5563', fontSize: 12 }}>© {new Date().getFullYear()} SpeedSeek OS. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  )
}
