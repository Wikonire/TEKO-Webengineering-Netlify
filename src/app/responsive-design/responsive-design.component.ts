import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-design',
  templateUrl: './responsive-design.component.html',
  styleUrl: './responsive-design.component.scss'
})
export class ResponsiveDesignComponent {
  public readonly autismEmpowermentQuotes:string[] = [
    "Ich bin nicht seltsam – ich bin limitierte Edition.",
    "Autistisch? Ja klar, was hast du dagegen`? Du bist neurotypisch und ich akzeptiere dich trotzdem!",
    "Smalltalk? Nein, danke. Lieber Deep Talk und Snacks! Und Kuchen und Popcorn! Gaaanz viel Kuchen und Popcorn!",
    "Ich bin nicht unsozial, ich bin selektiv sozial.",
    "Mein Gehirn hat viele Tabs offen und irgendwo läuft Musik.",
    "Eye-Kontakt ist überbewertet – Kuchen hingegen nicht!",
    "Ich stimme nicht zu laut, du bist nur zu sensibel.",
    "It's a feature!",
    "Ich ignoriere dich nicht, mein Gehirn lädt gerade noch.",
    "Kommunikation wäre einfacher, wenn du einfach Gedanken lesen könntest."
  ];
}
