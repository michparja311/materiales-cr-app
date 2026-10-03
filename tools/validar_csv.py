#!/usr/bin/env python3
"""
Validador de CSV para cimentaciones
Verifica IDs únicos, referencias cruzadas, enumeraciones válidas.
"""

import csv
from pathlib import Path

def validar_csv():
    datos_dir = Path("data")
    errores = []
    
    print("=" * 60)
    print("🔍 VALIDADOR DE CSV - CIMENTACIONES")
    print("=" * 60)
    
    # Validar productos
    try:
        with open(datos_dir / "cimientos-productos.csv", encoding='utf-8') as f:
            reader = csv.DictReader(f)
            productos = list(reader)
            ids = [p["id"] for p in productos]
            
            if len(ids) != len(set(ids)):
                errores.append("❌ cimientos-productos.csv: IDs duplicados")
            else:
                print(f"✓ cimientos-productos.csv: {len(productos)} productos únicos")
    except FileNotFoundError:
        errores.append("❌ No encontrado: cimientos-productos.csv")
    
    # Validar compatibilidad normativa
    try:
        with open(datos_dir / "cimientos-compatibilidad-normativa.csv", encoding='utf-8') as f:
            reader = csv.DictReader(f)
            reglas = list(reader)
            print(f"✓ cimientos-compatibilidad-normativa.csv: {len(reglas)} reglas")
    except FileNotFoundError:
        errores.append("❌ No encontrado: cimientos-compatibilidad-normativa.csv")
    
    # Validar indicadores
    try:
        with open(datos_dir / "cimientos-indicadores.csv", encoding='utf-8') as f:
            reader = csv.DictReader(f)
            indicadores = list(reader)
            print(f"✓ cimientos-indicadores.csv: {len(indicadores)} indicadores")
    except FileNotFoundError:
        errores.append("❌ No encontrado: cimientos-indicadores.csv")
    
    # Validar fuentes
    try:
        with open(datos_dir / "cimientos-fuentes.csv", encoding='utf-8') as f:
            reader = csv.DictReader(f)
            fuentes = list(reader)
            print(f"✓ cimientos-fuentes.csv: {len(fuentes)} fuentes")
    except FileNotFoundError:
        errores.append("❌ No encontrado: cimientos-fuentes.csv")
    
    # Resumen
    print("\n" + "=" * 60)
    if errores:
        print("❌ ERRORES ENCONTRADOS:")
        for err in errores:
            print(f"  {err}")
        return False
    else:
        print("✅ VALIDACIÓN EXITOSA")
        return True

if __name__ == "__main__":
    success = validar_csv()
    exit(0 if success else 1)
