import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-design',
  templateUrl: './responsive-design.component.html',
  styleUrl: './responsive-design.component.scss'
})
export class ResponsiveDesignComponent {
  public readonly autismEmpowermentQuotes:string[] = [
    "Ich bin nicht seltsam – ich bin eine limitierte Sonderedition.",
    "Autistisch? Ja. Aber du bist neurotypisch und ich akzeptiere dich trotzdem!",
    "Smalltalk? Nein, danke. Lieber Deep Talk und Snacks!",
    "Ich bin nicht unsozial, ich bin selektiv sozial.",
    "Mein Gehirn hat viele Tabs offen – und irgendwo läuft Musik.",
    "Eye-Contact ist überbewertet – Kuchen hingegen nicht!",
    "Ich stimme nicht zu laut, du bist nur zu sensibel.",
    "Mein Autismus ist keine Störung, sondern ein Feature.",
    "Ich ignoriere dich nicht, mein Gehirn lädt gerade noch.",
    "Kommunikation wäre einfacher, wenn du einfach Gedanken lesen könntest."
  ];
}
