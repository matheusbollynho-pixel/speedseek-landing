const BG = '#0d0f18'
const WHITE = '#f1f3f9'
const MUTED = '#8b93a8'
const BORDER = 'rgba(255,255,255,0.07)'

export default function TermosPage() {
  return (
    <div style={{ background: BG, color: WHITE, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(48px,8vw,80px) clamp(20px,5vw,40px)' }}>

        <a href="/" style={{ color: MUTED, fontSize: 13, textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}>
          ← Voltar ao site
        </a>

        <h1 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, marginBottom: 8 }}>Termos de Uso</h1>
        <p style={{ color: MUTED, fontSize: 13, marginBottom: 48 }}>Última atualização: abril de 2026</p>

        {[
          {
            titulo: '1. Das partes',
            texto: `Estes Termos de Uso regulam a relação entre o SpeedSeek OS, plataforma de gestão para oficinas mecânicas, operada por Matheus da Silva Alves - ME, CNPJ 24.890.547/0001-78, com endereço na BA-210, 913A, Paulo Afonso – BA, CEP 48609-175, doravante denominado "SpeedSeek OS" ou "Plataforma", e o contratante, pessoa física ou jurídica que adquirir ou utilizar o serviço, denominado "Cliente" ou "Usuário".`,
          },
          {
            titulo: '2. Do objeto',
            texto: `O SpeedSeek OS é um software como serviço (SaaS) acessado via navegador, sem necessidade de instalação, que oferece ferramentas de gestão para oficinas mecânicas, incluindo ordens de serviço, controle de estoque, caixa, agendamento, automações via WhatsApp e inteligência artificial.`,
          },
          {
            titulo: '3. Do cadastro e acesso',
            texto: `O acesso à plataforma é realizado mediante credenciais (e-mail e senha) fornecidas pelo SpeedSeek OS após a contratação. O Usuário é responsável por manter o sigilo de suas credenciais e por todas as ações realizadas com sua conta. Em caso de suspeita de acesso não autorizado, o Usuário deve comunicar imediatamente pelo e-mail speedseekos@gmail.com.`,
          },
          {
            titulo: '4. Dos planos e pagamentos',
            texto: `Os serviços são oferecidos nos planos Básico (R$ 79/mês), Profissional (R$ 149/mês) e Premium (R$ 219/mês), conforme detalhado na página de planos. O pagamento é realizado via Asaas, de forma recorrente mensal. O período de teste gratuito é de 7 (sete) dias, sem cobrança. Após o período de teste, a assinatura é ativada automaticamente caso não haja cancelamento.\n\nO não pagamento da mensalidade implica na suspensão do acesso à plataforma. Os dados permanecem armazenados por até 30 dias após o vencimento, podendo ser recuperados mediante regularização do pagamento.`,
          },
          {
            titulo: '5. Do cancelamento e retenção de dados',
            texto: `O Usuário pode cancelar a assinatura a qualquer momento, sem multa ou fidelidade, entrando em contato pelo WhatsApp ou e-mail speedseekos@gmail.com. O cancelamento encerra o acesso ao final do período já pago. Não há reembolso proporcional de períodos não utilizados.\n\nApós o cancelamento, os dados do Usuário ficam disponíveis por 30 (trinta) dias. Durante esse período, o Usuário pode solicitar a exportação completa de seus dados (clientes, ordens de serviço, relatórios) pelo WhatsApp ou e-mail. Após os 30 dias, todos os dados são removidos permanentemente dos servidores do SpeedSeek OS.`,
          },
          {
            titulo: '6. Das responsabilidades do usuário',
            texto: `O Usuário se compromete a:\n• Utilizar a plataforma apenas para fins lícitos;\n• Não compartilhar sua senha ou conta com terceiros não autorizados;\n• Manter seus dados cadastrais atualizados;\n• Não utilizar a plataforma para armazenar conteúdo ilegal, ofensivo ou que viole direitos de terceiros;\n• Ser responsável pelos dados inseridos na plataforma, incluindo dados de seus clientes.`,
          },
          {
            titulo: '7. Das responsabilidades do SpeedSeek OS',
            texto: `O SpeedSeek OS se compromete a:\n• Manter a plataforma disponível com meta de uptime de 99% ao mês (excluindo janelas de manutenção programada);\n• Realizar backups automáticos diários dos dados;\n• Notificar o Usuário com antecedência mínima de 2 horas em caso de manutenção programada;\n• Não comercializar ou compartilhar os dados dos Usuários com terceiros, exceto quando exigido por lei.\n\nEm caso de indisponibilidade superior a 24 horas consecutivas por falha exclusiva do SpeedSeek OS, o Usuário poderá solicitar crédito proporcional na próxima mensalidade.\n\nO SpeedSeek OS não se responsabiliza por perdas decorrentes de falhas de conexão à internet do Usuário, uso indevido da plataforma ou por atos de terceiros fora do controle da plataforma.`,
          },
          {
            titulo: '8. Da propriedade intelectual',
            texto: `Todo o conteúdo da plataforma, incluindo código-fonte, design, marca, logotipo e funcionalidades, é de propriedade exclusiva do SpeedSeek OS. É vedada a cópia, reprodução, engenharia reversa ou uso não autorizado de qualquer elemento da plataforma.`,
          },
          {
            titulo: '9. Das alterações',
            texto: `O SpeedSeek OS reserva-se o direito de alterar estes Termos a qualquer momento, com aviso prévio de 15 dias via e-mail ou mensagem na plataforma. O uso continuado após a comunicação implica na aceitação dos novos termos.`,
          },
          {
            titulo: '10. Do foro',
            texto: `As partes elegem o foro da comarca de Paulo Afonso – BA para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.`,
          },
          {
            titulo: '11. Do contato',
            texto: `Para dúvidas, cancelamentos ou suporte:\n📧 speedseekos@gmail.com\n📱 WhatsApp: (75) 98239-6239\n🌐 speedseekos.com.br`,
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
