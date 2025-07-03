export default function Section({children, modole,id}) {
    return (
        <section className={modole} id={id}>
            {children}
        </section>
    )
}