const BG = '#0d0f18'
const WHITE = '#f1f3f9'
const MUTED = '#8b93a8'
const BORDER = 'rgba(255,255,255,0.07)'

export default function PrivacidadePage() {
  return (
    <div style={{ background: BG, color: WHITE, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(48px,8vw,80px) clamp(20px,5vw,40px)' }}>

        <a href="/" style={{ color: MUTED, fontSize: 13, textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}>
          ← Voltar ao site
        </a>

        <h1 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, marginBottom: 8 }}>Política de Privacidade</h1>
        <p style={{ color: MUTED, fontSize: 13, marginBottom: 48 }}>Última atualização: abril de 2026</p>

        {[
          {
            titulo: '1. Quem somos',
            texto: `O SpeedSeek OS é uma plataforma de gestão para oficinas mecânicas operada por Matheus da Silva Alves, CPF 032.297.245-00. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos os dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).`,
          },
          {
            titulo: '2. Quais dados coletamos',
            texto: `Coletamos os seguintes dados:\n\n• Dados de cadastro: nome, e-mail, telefone, CNPJ/CPF e endereço da empresa contratante;\n• Dados de uso: informações sobre como você utiliza a plataforma (páginas acessadas, funcionalidades utilizadas);\n• Dados inseridos na plataforma: informações sobre os clientes finais da sua oficina (nome, telefone, CPF, veículos), que são de responsabilidade do Usuário;\n• Dados de pagamento: processados diretamente pelo Mercado Pago — o SpeedSeek OS não armazena dados de cartão.`,
          },
          {
            titulo: '3. Como usamos os dados',
            texto: `Usamos os dados para:\n• Prestar os serviços contratados;\n• Enviar notificações relacionadas à sua conta (avisos, cobranças, atualizações);\n• Melhorar a plataforma com base no uso;\n• Cumprir obrigações legais;\n• Entrar em contato para suporte técnico.`,
          },
          {
            titulo: '4. Base legal para o tratamento',
            texto: `Os dados são tratados com base nas seguintes hipóteses previstas na LGPD:\n• Execução de contrato: para prestar os serviços contratados;\n• Legítimo interesse: para melhorar a plataforma e o suporte;\n• Cumprimento de obrigação legal: quando exigido por lei ou autoridade competente;\n• Consentimento: para comunicações de marketing, quando aplicável.`,
          },
          {
            titulo: '5. Compartilhamento de dados',
            texto: `Não vendemos nem alugamos seus dados. Podemos compartilhar com:\n• Supabase: infraestrutura de banco de dados e autenticação (dados armazenados em servidores seguros);\n• Mercado Pago: processamento de pagamentos;\n• UazAPI: envio de mensagens via WhatsApp (somente para as automações ativas na sua conta);\n• Anthropic: processamento de mensagens pela IA de atendimento (somente conteúdo das mensagens para geração de respostas);\n• Autoridades competentes: quando exigido por lei ou decisão judicial.`,
          },
          {
            titulo: '6. Dados dos clientes finais da sua oficina',
            texto: `Ao cadastrar dados de seus clientes na plataforma (nome, telefone, CPF, etc.), você assume o papel de controlador desses dados perante a LGPD. O SpeedSeek OS atua como operador. Você é responsável por ter base legal adequada para coletar e tratar esses dados, bem como por informar seus clientes sobre o uso.`,
          },
          {
            titulo: '7. Retenção dos dados',
            texto: `Seus dados são mantidos enquanto sua conta estiver ativa. Após o cancelamento, os dados são retidos por até 30 dias para fins de recuperação e, após esse prazo, são excluídos ou anonimizados, salvo obrigação legal de retenção.`,
          },
          {
            titulo: '8. Segurança',
            texto: `Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:\n• Criptografia em trânsito (HTTPS);\n• Autenticação segura via Supabase Auth;\n• Acesso restrito a dados por políticas de segurança (Row Level Security);\n• Backups automáticos.`,
          },
          {
            titulo: '9. Seus direitos (LGPD)',
            texto: `Você tem direito a:\n• Confirmar a existência de tratamento dos seus dados;\n• Acessar seus dados;\n• Corrigir dados incompletos, inexatos ou desatualizados;\n• Solicitar a exclusão dos seus dados;\n• Revogar o consentimento;\n• Solicitar a portabilidade dos dados.\n\nPara exercer qualquer direito, entre em contato: speedseekos@gmail.com`,
          },
          {
            titulo: '10. Cookies',
            texto: `A plataforma utiliza cookies essenciais para funcionamento (autenticação e sessão). Não utilizamos cookies de rastreamento de terceiros para fins publicitários.`,
          },
          {
            titulo: '11. Contato com o encarregado (DPO)',
            texto: `Responsável pela proteção de dados:\nMatheus da Silva Alves\n📧 speedseekos@gmail.com\n📱 (75) 8239-6239`,
          },
          {
            titulo: '12. Alterações nesta política',
            texto: `Esta política pode ser atualizada periodicamente. Notificaremos os usuários por e-mail ou aviso na plataforma com antecedência de 15 dias em caso de mudanças relevantes.`,
          },
        ].map(({ titulo, texto }) => (
          <div key={titulo} style={{ marginBottom: 40, borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: WHITE }}>{titulo}</h2>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-line' }}>{texto}</p>
          </div>
        ))}

      </div>
    </div>
  )
}
