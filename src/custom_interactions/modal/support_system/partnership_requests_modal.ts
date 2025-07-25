// ------------------------------------------------------------//
//    Copyright (c) Inertia Lighting, Some Rights Reserved    //
// ------------------------------------------------------------//

import { handleSupportTicketCategoryModalSubmit,SupportCategoryId } from '@root/common/handlers';
import { CustomInteraction, CustomInteractionAccessLevel, CustomInteractionRunContext } from '@root/common/managers/custom_interactions_manager';
import * as Discord from 'discord.js';

// ------------------------------------------------------------//

export default new CustomInteraction({
    identifier: 'support_system_partnership_request_modal',
    type: Discord.InteractionType.ModalSubmit,
    data: undefined,
    metadata: {
        required_run_context: CustomInteractionRunContext.Guild,
        required_access_level: CustomInteractionAccessLevel.Public,
    },
    handler: async (discord_client, interaction) => {
        if (!interaction.inCachedGuild()) return;
        if (!interaction.isModalSubmit()) return;

        await handleSupportTicketCategoryModalSubmit(interaction, SupportCategoryId.PartnershipRequests);
    },
});
