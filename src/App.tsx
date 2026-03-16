import { CheckCircle, Wrench, BarChart3, MessageCircle, Star, ChevronDown, Zap, Shield, Clock } from 'lucide-react'
import { useState } from 'react'
import './index.css'

const WA_LINK = 'https://wa.me/5575988388629?text=Ol%C3%A1!%20Tenho%20interesse%20no%20SpeedSeek%20OS'

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: '#0f1117', color: '#f3f4f6', fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(15,17,23,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src="/logo.jpg" alt="SpeedSeek OS" style={{ height: 40, borderRadius: 6 }} />
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ background: '#E3000F', color: '#fff', padding: '8px 20px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            Falar com vendas
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 128, paddingBottom: 80, textAlign: 'center', padding: '128px 24px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(227,0,15,0.1)', border: '1px solid rgba(227,0,15,0.3)', color: '#f87171', padding: '6px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
            <Zap size={14} /> Sistema completo para oficinas
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 24 }}>
            Gerencie sua oficina com<br />
            <span style={{ color: '#E3000F' }}>velocidade e precisão</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 18, marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            O SpeedSeek OS é o sistema de ordens de serviço feito para mecânicos e oficinas que querem organização, controle e mais tempo para o que importa.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ background: '#E3000F', color: '#fff', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 17, textDecoration: 'none' }}>
              Quero testar grátis
            </a>
            <a href="#planos"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 17, textDecoration: 'none' }}>
              Ver planos
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ padding: '60px 24px', background: '#13161f' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { icon: <Zap color="#E3000F" size={28} />, title: 'Rápido e simples', desc: 'Interface pensada para o dia a dia da oficina. Abre no celular, tablet ou computador.' },
            { icon: <Shield color="#E3000F" size={28} />, title: 'Seus dados protegidos', desc: 'Sistema em nuvem com backup automático. Nunca mais perca informação de cliente.' },
            { icon: <Clock color="#E3000F" size={28} />, title: 'Economize tempo', desc: 'Gere OS, PDF e envie para o WhatsApp do cliente em segundos.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 24 }}>
              <div style={{ marginBottom: 14 }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: 14 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 12 }}>Tudo que sua oficina precisa</h2>
            <p style={{ color: '#9ca3af', fontSize: 17 }}>Em um só sistema, acessível de qualquer lugar</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {[
              { icon: <Wrench size={22} />, title: 'Ordens de Serviço', desc: 'Crie, edite e acompanhe todas as OS com status em tempo real.' },
              { icon: <CheckCircle size={22} />, title: 'PDF da OS', desc: 'Gere o documento da ordem de serviço com um clique e envie pelo WhatsApp.' },
              { icon: <BarChart3 size={22} />, title: 'Fluxo de Caixa', desc: 'Controle entradas e saídas. Saiba exatamente quanto sua oficina fatura.' },
              { icon: <MessageCircle size={22} />, title: 'Mensagens automáticas', desc: 'Envie mensagens de acompanhamento e pesquisa de satisfação via WhatsApp.' },
              { icon: <Star size={22} />, title: 'Pesquisa de satisfação', desc: 'Saiba o que o cliente achou do serviço e melhore continuamente.' },
              { icon: <Clock size={22} />, title: 'Lembretes de manutenção', desc: 'Avise o cliente quando a moto precisar de revisão. Fidelização automática.' },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, background: '#13161f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: 20 }}>
                <div style={{ color: '#E3000F', marginTop: 2, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>{f.title}</h4>
                  <p style={{ color: '#9ca3af', fontSize: 13 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" style={{ padding: '80px 24px', background: '#13161f' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 12 }}>Planos e preços</h2>
            <p style={{ color: '#9ca3af', fontSize: 17 }}>Escolha o plano ideal para o tamanho da sua oficina</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                name: 'Básico', price: 'R$ 79', desc: 'Para oficinas que estão começando',
                features: ['Ordens de serviço ilimitadas', 'Até 2 usuários', 'PDF da OS', 'Histórico de clientes', 'Suporte via WhatsApp'],
                highlight: false,
              },
              {
                name: 'Profissional', price: 'R$ 129', desc: 'O mais escolhido pelas oficinas',
                features: ['Tudo do Básico', 'Fluxo de caixa', 'Relatórios completos', 'Pesquisa de satisfação', 'Mensagens automáticas WhatsApp', 'Lembretes de manutenção'],
                highlight: true,
              },
              {
                name: 'Premium', price: 'R$ 199', desc: 'Para oficinas que querem mais',
                features: ['Tudo do Profissional', 'Domínio próprio', 'Logo personalizada', 'Suporte prioritário', 'Personalização de cores'],
                highlight: false,
              },
            ].map((plan, i) => (
              <div key={i} style={{
                borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column',
                background: plan.highlight ? '#E3000F' : '#0f1117',
                border: plan.highlight ? '1px solid #f87171' : '1px solid rgba(255,255,255,0.1)',
              }}>
                {plan.highlight && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10, color: 'rgba(255,255,255,0.8)' }}>Mais popular</div>}
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ fontSize: 13, marginBottom: 16, color: plan.highlight ? 'rgba(255,255,255,0.8)' : '#9ca3af' }}>{plan.desc}</p>
                <div style={{ fontSize: 42, fontWeight: 800, marginBottom: 2 }}>{plan.price}</div>
                <div style={{ fontSize: 13, marginBottom: 24, color: plan.highlight ? 'rgba(255,255,255,0.7)' : '#6b7280' }}>/mês</div>
                <ul style={{ listStyle: 'none', marginBottom: 28, flex: 1 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, marginBottom: 10 }}>
                      <CheckCircle size={16} color={plan.highlight ? '#fff' : '#E3000F'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'block', textAlign: 'center', padding: '12px 0', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                    background: plan.highlight ? '#fff' : '#E3000F',
                    color: plan.highlight ? '#E3000F' : '#fff',
                  }}>
                  Começar agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 48 }}>Quem usa aprova</h2>
          <div style={{ background: '#13161f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 36 }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={20} color="#facc15" fill="#facc15" />)}
            </div>
            <p style={{ color: '#d1d5db', fontSize: 18, fontStyle: 'italic', marginBottom: 20 }}>
              "O SpeedSeek OS transformou a organização da minha oficina. Antes era tudo no papel, hoje controlo tudo pelo celular mesmo."
            </p>
            <p style={{ color: '#6b7280', fontSize: 14 }}>— Cliente BA Motos, Bahia</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#13161f' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, textAlign: 'center', marginBottom: 48 }}>Perguntas frequentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { q: 'Preciso instalar algum programa?', a: 'Não. O SpeedSeek OS funciona direto no navegador do seu celular, tablet ou computador. Sem instalação.' },
              { q: 'Meus dados ficam seguros?', a: 'Sim. Todos os dados ficam armazenados em nuvem com backup automático. Você nunca perde nada.' },
              { q: 'Posso testar antes de pagar?', a: 'Sim! Entre em contato pelo WhatsApp e oferecemos um período de teste gratuito para você conhecer o sistema.' },
              { q: 'Funciona para moto e carro?', a: 'Sim. O sistema foi pensado para qualquer tipo de oficina mecânica.' },
              { q: 'Como é feito o pagamento?', a: 'Aceitamos Pix e cartão. O plano é mensal e você pode cancelar a qualquer momento.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: 'none', border: 'none', color: '#f3f4f6', fontWeight: 600, fontSize: 15, cursor: 'pointer', textAlign: 'left' }}>
                  {item.q}
                  <ChevronDown size={18} style={{ transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 16px', color: '#9ca3af', fontSize: 14 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 16 }}>Pronto para organizar sua oficina?</h2>
          <p style={{ color: '#9ca3af', fontSize: 17, marginBottom: 40 }}>Fale com a gente pelo WhatsApp e comece hoje mesmo.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 17, textDecoration: 'none' }}>
            <MessageCircle size={22} />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '32px 24px', textAlign: 'center', color: '#6b7280', fontSize: 13 }}>
        <img src="/logo.jpg" alt="SpeedSeek OS" style={{ height: 32, borderRadius: 4, margin: '0 auto 16px', display: 'block' }} />
        <p>© {new Date().getFullYear()} SpeedSeek OS. Todos os direitos reservados.</p>
      </footer>

    </div>
  )
}

export default App
