import { useState } from 'react'
import {
  CheckCircle, BarChart3, MessageCircle, Star, ChevronDown,
  Zap, Shield, Clock, Users, FileText, TrendingUp, ArrowRight,
  Phone, Calendar, Package, Search, Bell, Menu, X
} from 'lucide-react'
import './index.css'

const WA = 'https://wa.me/5575988388629?text=Ol%C3%A1!%20Tenho%20interesse%20no%20SpeedSeek%20OS'
const R = '#E3000F'
const BG = '#0d0f18'
const CARD = '#12151f'
const CARD2 = '#181c2a'
const BORDER = 'rgba(255,255,255,0.07)'
const MUTED = '#8b93a8'
const WHITE = '#f1f3f9'

/* ────────── helpers ────────── */
const Btn = ({ href = WA, children, outline = false, large = false }: { href?: string; children: React.ReactNode; outline?: boolean; large?: boolean }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{
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

/* ────────── Dashboard Mockup ────────── */
const Mockup = () => (
  <div style={{
    background: '#10131e', border: `1px solid ${BORDER}`, borderRadius: 18,
    overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
  }}>
    {/* title bar */}
    <div style={{ background: '#080a12', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${BORDER}` }}>
      {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
      <div style={{ flex: 1, background: '#10131e', borderRadius: 4, height: 22, marginLeft: 8, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
        <span style={{ fontSize: 11, color: '#374151' }}>app.speedseek.os/dashboard</span>
      </div>
    </div>
    {/* body */}
    <div style={{ padding: 18 }}>
      {/* stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 16 }}>
        {[['OS Abertas','24','#3b82f6'],['Em Andamento','11','#f59e0b'],['Concluídas','187','#10b981'],['Faturamento','R$18k', R]].map(([l,v,c]) => (
          <div key={l} style={{ background: '#080a12', borderRadius: 8, padding: '10px 12px', border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 10, color: MUTED, marginBottom: 4 }}>{l}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: c as string }}>{v}</div>
          </div>
        ))}
      </div>
      {/* mini chart bar */}
      <div style={{ background: '#080a12', borderRadius: 8, padding: 12, border: `1px solid ${BORDER}`, marginBottom: 12 }}>
        <div style={{ fontSize: 10, color: MUTED, marginBottom: 8 }}>Faturamento — últimos 7 dias</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 36 }}>
          {[40,65,50,80,55,90,70].map((h,i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 5 ? R : 'rgba(255,255,255,0.08)' }} />
          ))}
        </div>
      </div>
      {/* OS list */}
      <div style={{ background: '#080a12', borderRadius: 8, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px 60px', padding: '7px 12px', borderBottom: `1px solid ${BORDER}`, fontSize: 10, color: MUTED, fontWeight: 600 }}>
          <span>CLIENTE</span><span>SERVIÇO</span><span>STATUS</span><span>VALOR</span>
        </div>
        {[
          ['João Silva','Troca de óleo','Concluída','#10b981','R$120'],
          ['Maria Santos','Revisão completa','Andamento','#f59e0b','R$380'],
          ['Pedro Lima','Freios dianteiros','Aberta','#3b82f6','R$250'],
        ].map(([name,svc,status,color,val], i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px 60px', padding: '8px 12px', borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none', fontSize: 11, alignItems: 'center' }}>
            <span style={{ fontWeight: 600, color: WHITE }}>{name}</span>
            <span style={{ color: MUTED }}>{svc}</span>
            <span style={{ color: color as string, fontWeight: 600 }}>{status}</span>
            <span style={{ color: WHITE }}>{val}</span>
          </div>
        ))}
      </div>
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

/* ────────── Demo Screen Card ────────── */
const ScreenCard = ({ icon, title, desc, active }: { icon: React.ReactNode; title: string; desc: string; active?: boolean }) => (
  <div style={{
    background: active ? CARD2 : CARD,
    border: `1px solid ${active ? 'rgba(227,0,15,0.35)' : BORDER}`,
    borderRadius: 16, overflow: 'hidden',
    transition: 'border-color .2s',
  }}>
    <div style={{
      minHeight: 140, display: 'flex', flexDirection: 'column' as const,
      alignItems: 'center', justifyContent: 'center', gap: 12,
      background: active ? 'rgba(227,0,15,0.05)' : '#0d0f18',
      padding: 28, borderBottom: `1px solid ${BORDER}`,
    }}>
      <div style={{ width: 56, height: 56, borderRadius: 14, background: active ? R : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: active ? '#fff' : MUTED }}>{icon}</span>
      </div>
    </div>
    <div style={{ padding: '18px 20px' }}>
      <h4 style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: WHITE }}>{title}</h4>
      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
    </div>
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
          <img src="/logo.jpg" alt="SpeedSeek OS" style={{ height: 36, borderRadius: 6 }} />
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
          <FeatCard icon={<FileText size={22} />} title="Ordens de Serviço" desc="Crie, edite e acompanhe OS completas com cliente, veículo, serviços e valores. Status em tempo real." />
          <FeatCard icon={<Users size={22} />} title="Gestão de Clientes" desc="Cadastro completo com histórico de atendimentos e veículos. Nunca mais perca informação do cliente." />
          <FeatCard icon={<Calendar size={22} />} title="Agenda de Serviços" desc="Organize as OS por data, horário e mecânico. Distribua tarefas com clareza para toda a equipe." />
          <FeatCard icon={<BarChart3 size={22} />} title="Relatórios Completos" desc="Veja faturamento, serviços mais pedidos e desempenho da equipe. Dados para decisões inteligentes." />
          <FeatCard icon={<Search size={22} />} title="Histórico de Atendimentos" desc="Todo atendimento registrado para sempre. Busque qualquer OS de anos atrás em segundos." />
          <FeatCard icon={<MessageCircle size={22} />} title="WhatsApp Automático" desc="Envie PDF da OS, pesquisa de satisfação e lembretes de manutenção direto pelo WhatsApp do cliente." />
          <FeatCard icon={<Bell size={22} />} title="Lembretes de Manutenção" desc="O sistema avisa o cliente quando chegar a hora da próxima revisão. Fidelização automática." />
          <FeatCard icon={<Package size={22} />} title="Controle de Materiais" desc="Registre as peças usadas em cada OS e acompanhe o custo de material por serviço." />
          <FeatCard icon={<Star size={22} />} title="Pesquisa de Satisfação" desc="Colete avaliações dos clientes automaticamente após cada serviço. Identifique pontos de melhoria." />
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
        <Grid cols="repeat(auto-fit,minmax(240px,1fr))">
          <ScreenCard active icon={<BarChart3 size={26} />} title="Dashboard" desc="Visão geral em tempo real: OS abertas, faturamento do mês, equipe e alertas de crise." />
          <ScreenCard icon={<FileText size={26} />} title="Nova Ordem de Serviço" desc="Preencha cliente, veículo, serviço e valor em menos de 1 minuto. Gere PDF com um clique." />
          <ScreenCard icon={<Users size={26} />} title="Gestão de Clientes" desc="Histórico completo de cada cliente: todos os atendimentos, veículos e contatos em um lugar." />
          <ScreenCard icon={<TrendingUp size={26} />} title="Relatórios" desc="Gráficos e métricas por período. Saiba exatamente quanto sua oficina está faturando." />
        </Grid>
        <div style={{ marginTop: 48, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 'clamp(28px,4vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 24 }}>
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
            { name:'Básico', price:'R$ 79', desc:'Para oficinas que estão começando', features:['OS ilimitadas','Até 2 usuários','PDF da OS','Histórico de clientes','Suporte via WhatsApp'], hot:false },
            { name:'Profissional', price:'R$ 129', desc:'O plano mais completo para crescimento', features:['Tudo do Básico','Usuários ilimitados','Fluxo de caixa','Relatórios completos','Pesquisa de satisfação','WhatsApp automático','Lembretes de manutenção'], hot:true },
            { name:'Premium', price:'R$ 199', desc:'Para redes de oficinas e personalização total', features:['Tudo do Profissional','Domínio próprio','Logo personalizada','Suporte prioritário','Onboarding personalizado'], hot:false },
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
              <a href={WA} target="_blank" rel="noopener noreferrer"
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
            { text:'"O SpeedSeek OS transformou minha oficina. Antes era tudo no papel, hoje controlo tudo pelo celular. Recomendo muito!"', name:'João Carlos', role:'Proprietário, BA Motos', img:'/bamotos.png' },
            { text:'"A pesquisa de satisfação automática foi o diferencial. Meus clientes adoram receber o feedback e eu sei onde melhorar."', name:'Rafael Lobão', role:'Gestor, Lobão Motos', img:'/lobao.png' },
            { text:'"Em 10 anos de oficina nunca tive um sistema tão fácil de usar. Qualquer funcionário aprende em minutos."', name:'Carlos Andrade', role:'Mecânico proprietário', img:'/bandara-logo.png' },
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
          <img src="/logo.jpg" alt="SpeedSeek OS" style={{ height:32, borderRadius:6 }} />
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
