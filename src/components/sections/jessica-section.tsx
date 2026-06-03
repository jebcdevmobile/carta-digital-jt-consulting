/**
 * Sección con imagen circular de Jessica.
 * Se ubica entre el CTA de servicios y la barra de confianza.
 * @module components/sections/jessica-section
 */

/**
 * Fotografía de Jessica en formato circular responsivo.
 */
export function JessicaSection() {
    return (
        <div className="flex justify-center bg-[#1B4332] pt-1 pb-2 sm:pb-3">
            {/*    <img
                src="jessica.jpg"
                alt="Jessica"
                className="rounded-full object-cover w-60 h-60 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-lg"
                loading="lazy"
            /> */}
            <img
                src="jessica.jpg"
                alt="Jessica"
                className="rounded-full object-cover w-72 h-72 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 shadow-lg"
                loading="lazy"
            />
        </div>
    );
}
