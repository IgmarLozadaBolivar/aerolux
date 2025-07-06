import { Accordion, AccordionItem } from "@heroui/react";

export default function AccordionFaq() {

    return (
        <Accordion variant="light" defaultExpandedKeys={['1']}>
            <AccordionItem className={"font-cabinRegular text-xl"} key="1" aria-label="Accordion 1" title="1. ¿Cómo puedo reservar un vuelo?">
                <p className={"font-cabinRegular text-base text-[#344054]"}>
                    Puedes reservar un vuelo fácilmente desde nuestra plataforma ingresando los datos
                    de origen, destino, fechas y número de pasajeros. Luego selecciona el vuelo que
                    prefieras, completa la información del pasajero y realiza el pago para confirmar la reserva.
                </p>
            </AccordionItem>
            <AccordionItem className={"font-cabinRegular text-xl mt-4"} key="2" aria-label="Accordion 2" title="2. ¿Qué pasa si mi vuelo es retrasado o cancelado?">
                <p className={"font-cabinRegular text-base text-[#344054]"}>
                    Si tu vuelo es retrasado o cancelado, te notificaremos por correo electrónico o
                    SMS con las opciones disponibles. Dependiendo de la aerolínea, podrás reprogramar
                    tu vuelo, solicitar un reembolso o recibir un bono de viaje.
                </p>
            </AccordionItem>
            <AccordionItem className={"font-cabinRegular text-xl mt-4"} key="3" aria-label="Accordion 3" title="3. ¿Cuáles son los métodos de pago aceptados?">
                <p className={"font-cabinRegular text-base text-[#344054]"}>
                    Aceptamos múltiples métodos de pago, incluyendo tarjetas de crédito y débito
                    (Visa, MasterCard, American Express), transferencias bancarias, y plataformas digitales
                    como PayPal. Todos los pagos están protegidos por protocolos de seguridad.
                </p>
            </AccordionItem>
            <AccordionItem className={"font-cabinRegular text-xl mt-4"} key="4" aria-label="Accordion 4" title="4. ¿Cómo puedo ver mi tiquete de vuelo?">
                <p className={"font-cabinRegular text-base text-[#344054]"}>
                    Una vez confirmes tu reserva, recibirás un correo con tu tiquete electrónico.
                    También puedes acceder a él desde tu perfil en nuestra plataforma en la sección "Mis viajes".
                </p>
            </AccordionItem>
            <AccordionItem className={"font-cabinRegular text-xl mt-4"} key="5" aria-label="Accordion 5" title="5. ¿Puedo cancelar mi reserva?">
                <p className={"font-cabinRegular text-base text-[#344054]"}>
                    Sí, puedes cancelar tu reserva ingresando a tu cuenta y accediendo a la sección "Mis viajes".
                    Ten en cuenta que las políticas de cancelación dependen de cada aerolínea y pueden incluir
                    cargos adicionales o restricciones según la tarifa.
                </p>
            </AccordionItem>
        </Accordion>
    );
}
