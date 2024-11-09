import { Student } from "./Student"

const BASE_STUDENT_COOL_DOWN_SECONDS = 1200; // 20 minutes
const MAX_COOL_DOWN_SECONDS = 43200; // 12 hours

export class OHQueue {
    studentQueue: Student[] = [];
    activeTAs: any[] = [];
    currentStudents: Student[] = [];
    isOpen: boolean = false;

    openOH(): void {
        this.isOpen = true;
    }

    closeOH(): void {
        this.isOpen = false;
    }

    addStudentToQueue(student: Student, roster: Student[]): boolean {
        if (!this.isOpen) {
            return false;
        }
        
        if (!roster.includes(student)) {
            return false;
        }

        if (this.studentQueue.includes(student)) {
            return false;
        }

        this.studentQueue.push(student);

        return true;
    }

    removeStudentFromQueue(student: Student, studentBeingHelped: boolean): boolean {
        if (this.studentQueue.length == 0) {
            return false;
        }

        if (student.order < 0) {
            return false;
        }

        this.studentQueue.splice(student.order, 1);
        student.order = -1;

        if (studentBeingHelped) {
            this.currentStudents.push(student);
        }

        return true;
    }

    deferNextStudent(): void {
        let deferredStudent: Student = this.studentQueue.shift()!;
        this.studentQueue.splice(1, 0, deferredStudent);
    }

    helpComplete(student: Student, studentWasAbsent: boolean): boolean {
        const index: number = this.currentStudents.indexOf(student);

        if (index === -1) {
            return false;
        }
        
        this.currentStudents.splice(index, 1);

        if (studentWasAbsent) {
            student.absences++;
        }

        student.cooldownTime = Math.max(MAX_COOL_DOWN_SECONDS,
            BASE_STUDENT_COOL_DOWN_SECONDS * Math.max(student.absences, 1));

        return true;
    }
        
}
