import { useState } from 'react'
import {
  CheckCircle, BarChart3, MessageCircle, Star, ChevronDown,
  Zap, Shield, Clock, Users, FileText, TrendingUp, ArrowRight,
  Phone, Calendar, Package, Bell, Menu, X,
  LayoutGrid, ShoppingCart, Bot, DollarSign,
  Gift, UserCheck, Sparkles, ClipboardList, Receipt, Wallet
} from 'lucide-react'
import './index.css'

const WA = 'https://wa.me/5575823962639?text=Ol%C3%A1!%20Tenho%20interesse%20no%20SpeedSeek%20OS'
const waPlano = (plano: string) => {
  if (plano === 'Básico') return 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=22a5c181c6f8471aa4a8ca707418b105'
  if (plano === 'Profissional') return 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=11af749b0fa144a68ed224e3fe240dfd'
  if (plano === 'Premium') return 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=06aae1b35f394fc2903619cdc8d1c39c'
  return `https://wa.me/5575988388629?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(plano)}%20do%20SpeedSeek%20OS`
}
const R = '#E3000F'
const BG = '#0d0f18'
const CARD = '#12151f'
const CARD2 = '#181c2a'
const BORDER = 'rgba(255,255,255,0.07)'
const MUTED = '#8b93a8'
const WHITE = '#f1f3f9'

/* ────────── helpers ────────── */
const Btn = ({ href = WA, children, outline = false, large = false }: { href?: string; children: React.ReactNode; outline?: boolean; large?: boolean }) => (
  <a href={href} target={href.startsWith('#') ? undefined : '_blank'} rel="noopener noreferrer" style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: outline ? 'transparent' : R,
    color: '#fff',
    border: outline ? '1px solid rgba(255,255,255,0.2)' : 'none',
    padding: large ? '15px 32px' : '11px 22px',
    borderRadius: 10, fontWeight: 700,
    fontSize: large ? 17 : 14,
    textDecoration: 'none', cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
  }}>{children}</a>
)

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: 'inline-block',
    background: 'rgba(227,0,15,0.1)', border: '1px solid rgba(227,0,15,0.25)',
    color: '#f87171', padding: '4px 14px', borderRadius: 999,
    fontSize: 11, fontWeight: 700, letterSpacing: 1.2,
    textTransform: 'uppercase' as const, marginBottom: 18,
  }}>{children}</span>
)

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 14, color: WHITE }}>{children}</h2>
)

const Sub = ({ children }: { children: React.ReactNode }) => (
  <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>{children}</p>
)

const SectionWrap = ({ id, bg, children }: { id?: string; bg?: string; children: React.ReactNode }) => (
  <section id={id} style={{ background: bg ?? BG, padding: 'clamp(64px,8vw,96px) clamp(20px,5vw,48px)' }}>
    <div style={{ maxWidth: 1120, margin: '0 auto' }}>{children}</div>
  </section>
)

const SectionHead = ({ tag, title, sub, center = true }: { tag?: string; title: string; sub?: string; center?: boolean }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 56 }}>
    {tag && <Tag>{tag}</Tag>}
    <H2>{title}</H2>
    {sub && <Sub>{sub}</Sub>}
  </div>
)

const Grid = ({ cols, gap = 20, children }: { cols: string; gap?: number; children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: cols, gap }}>{children}</div>
)

/* ────────── Phone Mockup with real screenshot ────────── */
const Mockup = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{
      position: 'relative' as const,
      width: 260,
      background: '#0a0a0a',
      borderRadius: 44,
      padding: '14px 10px',
      boxShadow: '0 0 0 2px #333, 0 40px 100px rgba(0,0,0,0.7)',
    }}>
      {/* notch */}
      <div style={{ width: 80, height: 22, background: '#0a0a0a', borderRadius: 12, margin: '0 auto 6px', position: 'relative' as const, zIndex: 2 }} />
      {/* screen */}
      <div style={{ borderRadius: 28, overflow: 'hidden', lineHeight: 0 }}>
        <img src="/dashboard-screenshot.jpg" alt="SpeedSeek OS Dashboard" style={{ width: '100%', display: 'block' }} />
      </div>
      {/* home bar */}
      <div style={{ width: 80, height: 4, background: '#444', borderRadius: 4, margin: '10px auto 0' }} />
    </div>
  </div>
)

/* ────────── Feature Card ────────── */
const FeatCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div style={{ background: CARD2, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '26px 22px' }}>
    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(227,0,15,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
      <span style={{ color: R }}>{icon}</span>
    </div>
    <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: WHITE }}>{title}</h3>
    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{desc}</p>
  </div>
)

/* ────────── Benefit Row ────────── */
const BRow = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
    <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(227,0,15,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ color: R }}>{icon}</span>
    </div>
    <div>
      <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 5, color: WHITE }}>{title}</h4>
      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{desc}</p>
    </div>
  </div>
)

/* ────────── Step ────────── */
const Step = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ width: 50, height: 50, borderRadius: '50%', background: R, color: '#fff', fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{n}</div>
    <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: WHITE }}>{title}</h3>
    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>{desc}</p>
  </div>
)

/* ════════════════════════════════════
   APP
════════════════════════════════════ */
export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ background: BG, color: WHITE, minHeight: '100vh' }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(13,15,24,0.94)', backdropFilter: 'blur(14px)', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src="/logo.png" alt="SpeedSeek OS" style={{ height: 58, width: 'auto' }} />
          {/* desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
            {[['#funcionalidades','Recursos'],['#demo','Demo'],['#planos','Planos']].map(([href,label]) => (
              <a key={href} href={href} style={{ color: MUTED, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>{label}</a>
            ))}
            <Btn>Falar com vendas</Btn>
          </div>
          {/* mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: WHITE, cursor: 'pointer', display: 'none' }} className="mobile-menu-btn" type="button">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: '#080a12', borderTop: `1px solid ${BORDER}`, padding: '16px 24px', display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[['#funcionalidades','Recursos'],['#demo','Demo'],['#planos','Planos']].map(([href,label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: MUTED, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>{label}</a>
            ))}
            <Btn>Falar com vendas</Btn>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 64, background: BG }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(72px,9vw,110px) clamp(20px,5vw,48px) clamp(60px,7vw,90px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <Tag>Sistema para oficinas mecânicas</Tag>
            <h1 style={{ fontSize: 'clamp(36px,5.5vw,58px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 22, color: WHITE }}>
              Controle todas as OS da sua oficina{' '}
              <span style={{ color: R }}>em um só lugar</span>
            </h1>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
              Crie ordens de serviço, gerencie clientes, acompanhe mecânicos e emita relatórios — tudo pelo celular, sem instalação.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const, marginBottom: 44 }}>
              <Btn large><Zap size={17} /> Testar grátis</Btn>
              <Btn large outline href="#demo">Ver demonstração</Btn>
            </div>
            {/* trust strip */}
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' as const }}>
              {[['500+','OS geradas'],['98%','Satisfação'],['7 dias','Teste grátis']].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: WHITE }}>{v}</div>
                  <div style={{ fontSize: 12, color: MUTED }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <Mockup />
        </div>
      </section>

      {/* ── CLIENTES (PROVA SOCIAL) ── */}
      <section style={{ background: CARD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: '32px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: MUTED, fontSize: 13, fontWeight: 600, letterSpacing: 1.2, textTransform: 'uppercase' as const, marginBottom: 24 }}>
            Oficinas que já usam o SpeedSeek OS
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' as const }}>
            {[
              { src: '/bamotos.png', alt: 'BA Motos' },
              { src: '/lobao.png', alt: 'Lobão Motos' },
              { src: '/bandara-logo.png', alt: 'Bandara Motos' },
            ].map(({ src, alt }) => (
              <div key={alt} style={{ background: '#0d1b2e', borderRadius: 12, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 160, height: 72, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: alt === 'Bandara Motos' ? 68 : 44, objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <SectionWrap bg={BG}>
        <SectionHead tag="O problema" title="Sua oficina ainda usa papel ou planilha?" sub="Isso gera retrabalho, informações perdidas e clientes insatisfeitos." />
        <Grid cols="repeat(auto-fit,minmax(220px,1fr))">
          {[
            ['📋','OS perdidas ou preenchidas errado'],
            ['📞','Cliente sem saber o status do serviço'],
            ['💸','Sem controle do que entrou e saiu no caixa'],
            ['🔧','Mecânicos sem organização das tarefas'],
          ].map(([icon, text]) => (
            <div key={text} style={{ background: CARD, border: '1px solid rgba(227,0,15,0.15)', borderRadius: 14, padding: '20px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 24 }}>{icon}</span>
              <p style={{ color: '#c9d0dc', fontSize: 14, lineHeight: 1.55 }}>{text}</p>
            </div>
          ))}
        </Grid>
        <p style={{ textAlign: 'center', marginTop: 36, color: MUTED, fontSize: 15 }}>
          O SpeedSeek OS resolve tudo isso — simples, acessível do celular, sem instalação.
        </p>
      </SectionWrap>

      {/* ── COMO FUNCIONA ── */}
      <SectionWrap bg={CARD}>
        <SectionHead tag="Como funciona" title="Comece em minutos, sem complicação" sub="Três passos para sua oficina funcionar no sistema" />
        <Grid cols="repeat(auto-fit,minmax(240px,1fr))" gap={40}>
          <Step n="1" title="Crie sua conta" desc="Acesse pelo navegador — celular, tablet ou computador. Sem instalar nada. Configuração em minutos." />
          <Step n="2" title="Cadastre clientes e equipe" desc="Adicione seus clientes, veículos, mecânicos e comece a criar ordens de serviço imediatamente." />
          <Step n="3" title="Gerencie tudo em tempo real" desc="Acompanhe status de cada OS, envie PDF pelo WhatsApp e consulte relatórios de onde estiver." />
        </Grid>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Btn large><ArrowRight size={17} /> Começar agora</Btn>
        </div>
      </SectionWrap>

      {/* ── FUNCIONALIDADES ── */}
      <SectionWrap id="funcionalidades">
        <SectionHead tag="Recursos" title="Tudo que sua oficina precisa" sub="Ferramentas pensadas para o dia a dia de quem trabalha com mecânica" />
        <Grid cols="repeat(auto-fit,minmax(270px,1fr))">
          <FeatCard icon={<FileText size={22} />} title="Ordens de Serviço Completas" desc="Crie OS com cliente, moto, serviços, peças e assinatura digital do cliente na entrada e na entrega." />
          <FeatCard icon={<LayoutGrid size={22} />} title="Quadro da Oficina" desc="Painel visual em tempo real com todas as OS abertas. Alertas de urgência, filtro por mecânico e troca de status na hora." />
          <FeatCard icon={<Bot size={22} />} title="IA de Atendimento 24h" desc="Atendente virtual no WhatsApp: agenda horários, consulta o status do veículo, verifica estoque e responde dúvidas automaticamente, 24 horas por dia." />
          <FeatCard icon={<Calendar size={22} />} title="Agendamento pelo WhatsApp" desc="Clientes agendam direto pelo WhatsApp via IA. O sistema controla a capacidade diária e confirma automaticamente." />
          <FeatCard icon={<ShoppingCart size={22} />} title="Balcão / PDV" desc="Venda peças e serviços avulsos no balcão com emissão de nota numerada, desconto e lançamento automático no caixa." />
          <FeatCard icon={<Package size={22} />} title="Estoque Completo" desc="Cadastro de produtos com entradas, saídas, movimentações por OS ou balcão, alertas de falta e histórico completo." />
          <FeatCard icon={<Sparkles size={22} />} title="IA de Estoque" desc="Assistente inteligente que analisa seu estoque, identifica produtos em falta e sugere o que repor com base no histórico de uso." />
          <FeatCard icon={<BarChart3 size={22} />} title="Fluxo de Caixa e Relatórios" desc="Entradas e saídas por dia, semana ou mês. Relatórios por mecânico, peças vendidas e comissões calculadas automaticamente." />
          <FeatCard icon={<Bell size={22} />} title="WhatsApp Automático" desc="Confirmações de agendamento, aviso de OS pronta, lembrete dia anterior, follow-up de balcão e mensagens de aniversário." />
          <FeatCard icon={<Gift size={22} />} title="Pós-venda e Fidelização" desc="Lembretes de manutenção automáticos por palavra-chave (troca de óleo, corrente, filtro) e desconto de aniversário personalizado por IA." />
          <FeatCard icon={<Star size={22} />} title="Pesquisa de Satisfação" desc="Avaliações enviadas automaticamente via WhatsApp após cada serviço. Dashboard com notas, comentários e alertas de insatisfação." />
          <FeatCard icon={<DollarSign size={22} />} title="Comissões da Equipe" desc="Defina a taxa de comissão de cada mecânico. O sistema calcula automaticamente com base nos serviços realizados." />
          <FeatCard icon={<UserCheck size={22} />} title="Controle de Acesso" desc="Perfis de usuário com permissões diferentes. Restrinja acesso ao caixa, relatórios e pagamentos para cada membro da equipe." />
          <FeatCard icon={<ClipboardList size={22} />} title="Agenda da Oficina" desc="Calendário semanal com turnos manhã/tarde. Agende, edite e cancele atendimentos e converta qualquer agendamento em OS com um clique." />
          <FeatCard icon={<Receipt size={22} />} title="Boletos e Contas a Pagar" desc="Controle todas as despesas da oficina com vencimento, recorrência, alertas automáticos, PIX e leitura de código de barras." />
          <FeatCard icon={<Wallet size={22} />} title="Fiados e Crédito" desc="Registre vendas no fiado, acompanhe o que cada cliente deve, aceite pagamentos parciais e envie cobranças automáticas pelo WhatsApp." />
        </Grid>
      </SectionWrap>

      {/* ── BENEFÍCIOS ── */}
      <SectionWrap bg={CARD}>
        <Grid cols="repeat(auto-fit,minmax(360px,1fr))" gap={64}>
          <div>
            <SectionHead tag="Benefícios" title="Por que escolher o SpeedSeek OS?" center={false} />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 30 }}>
              <BRow icon={<Zap size={20} />} title="Mais organização, menos erro" desc="Chega de OS rasgada e cliente sem resposta. Tudo registrado, acessível e seguro na nuvem." />
              <BRow icon={<TrendingUp size={20} />} title="Mais produtividade" desc="Mecânicos sabem o que fazer, atendentes têm as informações na mão. Menos tempo perdido." />
              <BRow icon={<Shield size={20} />} title="Controle total" desc="Saiba quantas OS estão abertas, o que está pendente e quanto você faturou no mês." />
              <BRow icon={<Clock size={20} />} title="Histórico completo" desc="Todo atendimento registrado para sempre. Consulte qualquer OS de anos atrás em segundos." />
            </div>
          </div>
          <Grid cols="1fr 1fr" gap={16}>
            {[['3x','mais rápido criar uma OS'],['100%','acessível pelo celular'],['0','instalação necessária'],['24h','suporte disponível']].map(([v,l]) => (
              <div key={l} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: R, marginBottom: 8 }}>{v}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{l}</div>
              </div>
            ))}
          </Grid>
        </Grid>
      </SectionWrap>

      {/* ── DEMO ── */}
      <SectionWrap id="demo">
        <SectionHead tag="Demonstração" title="Veja como é simples usar" sub="Interface limpa e intuitiva, pensada para funcionar perfeitamente no celular" />
        {/* YouTube Video */}
        <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.6)', border: `1px solid ${BORDER}`, marginBottom: 56, position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/MDnr712zrXo?rel=0&modestbranding=1"
            title="SpeedSeek OS - Demonstração"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
        {/* Desktop screenshot */}
        <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.6)', border: `1px solid ${BORDER}`, marginBottom: 56 }}>
          <img src="/dashboard-desktop.jpg" alt="SpeedSeek OS - Dashboard Desktop" style={{ width: '100%', display: 'block' }} />
        </div>

        {/* PDF preview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center', marginBottom: 56 }}>
          <div>
            <Tag>PDF Profissional</Tag>
            <H2>Ordem de Serviço em PDF com um clique</H2>
            <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              Gere um PDF completo com todos os dados da OS — cliente, veículo, serviços, peças, valores, checklist e assinaturas. Envie direto pelo WhatsApp em segundos.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {['Dados completos do cliente e veículo', 'Lista de peças e serviços com valores', 'Checklist de inspeção e assinaturas', 'Envio automático pelo WhatsApp'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={16} color={R} style={{ flexShrink: 0 }} />
                  <span style={{ color: MUTED, fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5)', borderRadius: 8, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
            <img src="/pdf-preview.jpg" alt="PDF Ordem de Serviço SpeedSeek OS" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56, alignItems: 'center' }}>
          {/* Phone with real screenshot */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative' as const, width: 240,
              background: '#0a0a0a', borderRadius: 44, padding: '14px 10px',
              boxShadow: '0 0 0 2px #333, 0 32px 80px rgba(227,0,15,0.2), 0 40px 100px rgba(0,0,0,0.7)',
            }}>
              <div style={{ width: 80, height: 22, background: '#0a0a0a', borderRadius: 12, margin: '0 auto 6px' }} />
              <div style={{ borderRadius: 28, overflow: 'hidden', lineHeight: 0 }}>
                <img src="/dashboard-screenshot.jpg" alt="Dashboard SpeedSeek OS" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ width: 80, height: 4, background: '#444', borderRadius: 4, margin: '10px auto 0' }} />
            </div>
          </div>
          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 24 }}>
            {[
              [<BarChart3 size={20} />, 'Dashboard em tempo real', 'Veja de relance: OS abertas, em andamento, concluídas e faturamento — tudo numa tela.'],
              [<FileText size={20} />, 'Crie OS em menos de 1 minuto', 'Preencha cliente, veículo, serviço e valor. Gere PDF profissional com um clique.'],
              [<Users size={20} />, 'Histórico completo de clientes', 'Todos os atendimentos, veículos e contatos de cada cliente em um só lugar.'],
              [<TrendingUp size={20} />, 'Relatórios detalhados', 'Gráficos por período. Saiba exatamente quanto sua oficina está faturando.'],
            ].map(([icon, title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(227,0,15,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: R }}>{icon as React.ReactNode}</span>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 5, color: WHITE }}>{title as string}</h4>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{desc as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 56, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 'clamp(28px,4vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: WHITE }}>Quer ver o sistema ao vivo?</h3>
            <p style={{ color: MUTED, fontSize: 15 }}>Agende uma demonstração gratuita pelo WhatsApp. Mostramos tudo em 15 minutos.</p>
          </div>
          <Btn large><Phone size={17} /> Solicitar demonstração</Btn>
        </div>
      </SectionWrap>

      {/* ── PLANOS ── */}
      <SectionWrap bg={CARD} id="planos">
        <SectionHead tag="Planos" title="Preço justo para qualquer oficina" sub="Sem taxa de adesão. Cancele quando quiser." />
        <Grid cols="repeat(auto-fit,minmax(280px,1fr))">
          {[
            { name:'Básico', price:'R$ 79', desc:'Para oficinas que estão começando', features:['OS ilimitadas','Até 2 usuários','PDF da OS','Histórico de clientes','Agenda da oficina','Suporte via WhatsApp'], hot:false },
            { name:'Profissional', price:'R$ 149', desc:'O plano mais completo para crescimento', features:['Tudo do Básico','Usuários ilimitados','Balcão / PDV','Estoque completo','Fluxo de caixa e relatórios','Pesquisa de satisfação','WhatsApp automático completo','Lembretes de manutenção e aniversário','Fiados e crédito de clientes','Boletos e contas a pagar'], hot:true },
            { name:'Premium', price:'R$ 219', desc:'Automação total com IA para sua oficina', features:['Tudo do Profissional','IA de atendimento 24h no WhatsApp','IA de estoque inteligente','Domínio próprio','Logo personalizada','Suporte prioritário','Onboarding personalizado'], hot:false },
          ].map(p => (
            <div key={p.name} style={{
              borderRadius: 20, padding: '32px 26px',
              display: 'flex', flexDirection: 'column' as const,
              background: p.hot ? R : BG,
              border: p.hot ? 'none' : `1px solid ${BORDER}`,
              position: 'relative' as const,
            }}>
              {p.hot && <div style={{ position: 'absolute' as const, top: -14, left: '50%', transform: 'translateX(-50%)', background: '#facc15', color: '#000', fontSize: 10, fontWeight: 800, padding: '4px 14px', borderRadius: 999, letterSpacing: 1.2, textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>MAIS POPULAR</div>}
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{p.name}</h3>
              <p style={{ fontSize: 13, marginBottom: 20, color: p.hot ? 'rgba(255,255,255,0.75)' : MUTED }}>{p.desc}</p>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 44, fontWeight: 900 }}>{p.price}</span>
                <span style={{ fontSize: 13, color: p.hot ? 'rgba(255,255,255,0.6)' : MUTED }}>/mês</span>
              </div>
              <ul style={{ listStyle:'none', flex:1, display:'flex', flexDirection:'column' as const, gap:11, marginBottom:28 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display:'flex', alignItems:'center', gap:9, fontSize:13 }}>
                    <CheckCircle size={15} color={p.hot ? '#fff' : R} style={{ flexShrink:0 }} />{f}
                  </li>
                ))}
              </ul>
              <a href={waPlano(p.name)} target="_blank" rel="noopener noreferrer"
                style={{ display:'block', textAlign:'center', padding:'13px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', background: p.hot ? '#fff' : R, color: p.hot ? R : '#fff' }}>
                Começar agora
              </a>
            </div>
          ))}
        </Grid>
        <p style={{ textAlign:'center', marginTop:24, color:MUTED, fontSize:13 }}>
          Teste grátis por 7 dias. Sem cartão de crédito.
        </p>
      </SectionWrap>

      {/* ── DEPOIMENTOS ── */}
      <SectionWrap>
        <SectionHead tag="Depoimentos" title="Quem usa aprova" sub="Oficinas que já transformaram a gestão com o SpeedSeek OS" />
        <Grid cols="repeat(auto-fit,minmax(280px,1fr))">
          {[
            { text:'"O SpeedSeek OS transformou minha oficina. Antes era tudo no papel, hoje controlo tudo pelo celular. Recomendo muito!"', name:'Eduardo Silva', role:'Proprietário, BA Motos', img:'/bamotos.png' },
            { text:'"A pesquisa de satisfação automática foi o diferencial. Meus clientes adoram receber o feedback e eu sei onde melhorar."', name:'Alisson Rodrigues', role:'Gestor, Lobão Motos', img:'/lobao.png' },
            { text:'"Em 10 anos de oficina nunca tive um sistema tão fácil de usar. Qualquer funcionário aprende em minutos."', name:'Matheus Silva', role:'Proprietário, Bandara Motos', img:'/bandara-logo.png' },
          ].map((t,i) => (
            <div key={i} style={{ background:CARD, border:`1px solid ${BORDER}`, borderRadius:16, padding:28 }}>
              <div style={{ display:'flex', gap:3, marginBottom:14 }}>
                {[...Array(5)].map((_,j) => <Star key={j} size={15} color="#facc15" fill="#facc15" />)}
              </div>
              <p style={{ color:'#c9d0dc', fontSize:14, lineHeight:1.7, fontStyle:'italic', marginBottom:20 }}>{t.text}</p>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <img src={t.img} alt={t.name} style={{ height:32, borderRadius:6, filter:'brightness(0) invert(1)', opacity:0.7 }} />
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color:WHITE }}>{t.name}</div>
                  <div style={{ color:MUTED, fontSize:12 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </SectionWrap>

      {/* ── FAQ ── */}
      <SectionWrap bg={CARD}>
        <SectionHead tag="Dúvidas" title="Perguntas frequentes" />
        <div style={{ maxWidth:720, margin:'0 auto', display:'flex', flexDirection:'column' as const, gap:10 }}>
          {[
            ['Preciso instalar algum programa?','Não. O SpeedSeek OS funciona direto no navegador do celular, tablet ou computador. Sem instalação.'],
            ['Posso testar antes de pagar?','Sim! Oferecemos 7 dias de teste gratuito. Entre em contato pelo WhatsApp e configuramos tudo para você.'],
            ['Funciona para moto e carro?','Sim. O sistema foi desenvolvido para qualquer tipo de oficina mecânica, motos ou carros.'],
            ['Meus dados ficam seguros?','Sim. Dados armazenados em nuvem com backup automático. Você nunca perde nenhuma informação.'],
            ['Como é feito o pagamento?','Aceitamos Pix e cartão de crédito. Plano mensal sem fidelidade, cancele quando quiser.'],
            ['Tenho suporte para configurar?','Sim! Nosso time te ajuda a configurar e treinar a equipe via WhatsApp, sem custo adicional.'],
          ].map(([q,a],i) => (
            <div key={i} style={{ background:BG, border:`1px solid ${BORDER}`, borderRadius:12, overflow:'hidden' }}>
              <button onClick={() => setOpenFaq(openFaq===i?null:i)} type="button"
                style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'17px 22px', background:'none', border:'none', color:WHITE, fontWeight:600, fontSize:14, cursor:'pointer', textAlign:'left' as const, gap:12 }}>
                {q}
                <ChevronDown size={17} style={{ transition:'transform .2s', transform:openFaq===i?'rotate(180deg)':'none', flexShrink:0 }} />
              </button>
              {openFaq===i && <div style={{ padding:'0 22px 17px', color:MUTED, fontSize:13, lineHeight:1.7 }}>{a}</div>}
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* ── CTA FINAL ── */}
      <section style={{ background: R, padding:'clamp(64px,8vw,96px) 24px', textAlign:'center' }}>
        <div style={{ maxWidth:660, margin:'0 auto' }}>
          <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:900, marginBottom:14, color:'#fff', lineHeight:1.18 }}>
            Comece a organizar sua oficina hoje.
          </h2>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:17, marginBottom:40, lineHeight:1.65 }}>
            Mais de 500 ordens de serviço gerenciadas. Junte-se às oficinas que já usam o SpeedSeek OS.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:10, background:'#fff', color:R, padding:'16px 40px', borderRadius:14, fontWeight:800, fontSize:18, textDecoration:'none' }}>
            <MessageCircle size={22} /> Começar agora
          </a>
          <p style={{ marginTop:16, color:'rgba(255,255,255,0.65)', fontSize:13 }}>7 dias grátis · Sem cartão · Suporte incluso</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:'#080a12', borderTop:`1px solid ${BORDER}`, padding:'36px 24px' }}>
        <div style={{ maxWidth:1120, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' as const, gap:20 }}>
          <img src="/logo.png" alt="SpeedSeek OS" style={{ height: 28, width: 'auto' }} />
          <div style={{ display:'flex', gap:24, flexWrap:'wrap' as const }}>
            {[['#funcionalidades','Recursos'],['#planos','Planos'],['#demo','Demo'],[WA,'Contato']].map(([href,label]) => (
              <a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" style={{ color:MUTED, textDecoration:'none', fontSize:13 }}>{label}</a>
            ))}
          </div>
          <p style={{ color:'#2e3347', fontSize:12 }}>© {new Date().getFullYear()} SpeedSeek OS. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* ── FLOATING WA BUTTON ── */}
      <a href={WA} target="_blank" rel="noopener noreferrer"
        style={{ position:'fixed', bottom:24, right:24, zIndex:100, width:54, height:54, borderRadius:'50%', background:'#25D366', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 20px rgba(37,211,102,0.4)', textDecoration:'none' }}>
        <MessageCircle size={26} color="#fff" fill="transparent" />
      </a>

    </div>
  )
}
