const SiteFooter = () => {
  return (
    <footer className="bg-foreground py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-heading text-xl font-semibold text-primary-foreground mb-4">jchermann</h4>
          <p className="text-sm font-body text-primary-foreground/60 leading-relaxed">
            Moda feminina com propósito. Estilo, conforto e elegância para todas as mulheres.
          </p>
        </div>
        <div>
          <h5 className="text-xs font-body font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4">Institucional</h5>
          <ul className="space-y-2">
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Sobre nós</span></li>
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Nossas lojas</span></li>
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Trabalhe conosco</span></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-body font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4">Ajuda</h5>
          <ul className="space-y-2">
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Trocas e devoluções</span></li>
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Frete e entrega</span></li>
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Fale conosco</span></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-body font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4">Redes Sociais</h5>
          <ul className="space-y-2">
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Instagram</span></li>
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Facebook</span></li>
            <li><span className="text-sm font-body text-primary-foreground/50 cursor-default">Pinterest</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-primary-foreground/10">
        <p className="text-xs font-body text-primary-foreground/40 text-center">
          © 2026 J.Chermann. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
