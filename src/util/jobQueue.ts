
interface QueuedJob<T = any> {
    job: () => Promise<T>;
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
    status: Status;
}

enum Status {
    WAITING, RUNNING, FINISHED
}

/**
 * Queue for jobs. Can run multiple jobs in parallel.
 */
export class JobQueue {
    private readonly parallel: number;
    private queue: QueuedJob[] = [];

    constructor(parallel: number) {
        this.parallel = parallel;
    }

    /**
     * Add new job to queue. Promise will be resolved when the job is finished.
     *
     * @param job job that returns a promise
     */
    public enqueue<T>(job: () => Promise<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queue.push({ job: job, resolve, reject, status: Status.WAITING });
            this.dequeue()
        })
    }

    private dequeue() {
        // Get next waiting job, if less than [parallel] are running
        let job = this.queue.find((job, index) => index < this.parallel && job.status === Status.WAITING);
        if (job) {
            job.status = Status.RUNNING;
            console.debug(`Start job, remaining queue length: ${this.length()}`);
            job.job().then(job.resolve).catch(job.reject).finally(() => {
                job!.status = Status.FINISHED
                // Remove finished job
                this.queue = this.queue.filter((job) => job.status !== Status.FINISHED)
                console.debug(`Finished job, remaining queue length: ${this.length()}`);
                // Start next job
                this.dequeue()
            })
        }
    }

    /**
     * Number of running and waiting jobs
     */
    public length(): number {
        return this.queue.length
    }
}
