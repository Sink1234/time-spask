export default function  classNames(...args: any[]) {
    return args.filter(v=>v).join(" ")
}