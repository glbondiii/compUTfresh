export class Student {
    name: string;
    ta: string;

    // Changing During Runtime
    order: number;
    cooldownTime: number;
    absences: number;

    constructor(name: string, ta: string) {
        this.name = name;
        this.ta = ta;
        this.order = -1;
        this.cooldownTime = 0;
        this.absences = 0;
    }

    isOnCooldown(): boolean {
        return (this.cooldownTime > 0);
    }
    
    toString(): string {
        return this.name;
    }
}
