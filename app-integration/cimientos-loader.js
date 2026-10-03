/**
 * CimientosLoader - Módulo para cargar y evaluar soluciones de cimentación
 * Integración con materiales-cr-app
 */

const CimientosLoader = {
  base_url: '/data/cimientos',
  
  // Cargar todos los CSV en paralelo
  async cargar() {
    try {
      console.log('📦 Cargando cimientos...');
      
      const [productos, indicadores, selectorNormativo, fuentes] = await Promise.all([
        this.cargarCSV('cimientos-productos.csv'),
        this.cargarCSV('cimientos-indicadores.csv'),
        this.cargarCSV('cimientos-compatibilidad-normativa.csv'),
        this.cargarCSV('cimientos-fuentes.csv')
      ]);
      
      console.log('✓ Cimentaciones cargadas: 5 soluciones');
      return { productos, indicadores, selectorNormativo, fuentes };
    } catch (error) {
      console.error('❌ Error cargando cimientos:', error);
      return { productos: [], indicadores: [], selectorNormativo: [], fuentes: [] };
    }
  },
  
  // Cargar CSV con PapaParse
  async cargarCSV(nombre) {
    return new Promise((resolve, reject) => {
      const url = \\/\\;
      
      if (typeof Papa === 'undefined') {
        reject(new Error('PapaParse no disponible'));
        return;
      }
      
      Papa.parse(url, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results.data),
        error: (error) => reject(error),
        download: true
      });
    });
  },
  
  // Evaluar aptitud según condiciones del sitio
  evaluarAptitud(producto_id, sitio, selector) {
    let nivel_minimo = 'recomendado';
    
    for (let regla of selector) {
      const condicion = regla.descripcion.toLowerCase();
      let activa = false;
      
      if (condicion.includes('expansivo') && sitio.expansivo) activa = true;
      if (condicion.includes('colapsable') && sitio.colapsable) activa = true;
      if (condicion.includes('licuable') && sitio.licuable) activa = true;
      if (condicion.includes('relleno') && sitio.relleno_organico) activa = true;
      
      if (activa) {
        const aptitud = regla[producto_id];
        if (aptitud === 'excluido') return 'excluido';
        if (aptitud === 'condicionado') nivel_minimo = 'condicionado';
      }
    }
    
    return nivel_minimo;
  },
  
  // Calcular puntuación basada en indicadores
  calcularPuntuacion(producto_id, indicadores) {
    const relevantes = indicadores.filter(ind => ind.producto_id === producto_id);
    
    if (relevantes.length === 0) return 0;
    
    const escala = { 'E5': 3, 'E4': 2.5, 'E3': 2, 'E2': 1.5, 'E1': 1, 'sin_datos': 0 };
    const suma = relevantes.reduce((acc, ind) => {
      return acc + (escala[ind.nivel_evidencia] || 0);
    }, 0);
    
    const promedio = suma / relevantes.length;
    return Math.round((promedio / 3) * 10 * 100) / 100;
  },
  
  // Adaptar producto al formato de la app
  adaptarProducto(producto, indicadores) {
    return {
      id: producto.id,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      componente: 'cimientos',
      puntuacion: this.calcularPuntuacion(producto.id, indicadores),
      zona_sismica_minima: producto.zona_sismica_minima
    };
  }
};

if (typeof window !== 'undefined') {
  window.CimientosLoader = CimientosLoader;
}
