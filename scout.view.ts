namespace $.$$ {

	export class $hyoo_scout_gist extends $mol_object {
		icon = ''
		title = ''
		tags = {
			Возраст: [] as string[],
			Реквизит: [] as string[],
			Подготовка: [] as string[],
			Цель: [] as string[],
			Место: [] as string[],
			Длительность: [] as string[],
		}
		content! : string
	}

	export class $hyoo_scout extends $.$hyoo_scout {

		@ $mol_mem
		data() {
			const text = $mol_fetch.text( 'hyoo/scout/_games.tree' )
			const json = this.$.$mol_tree2_from_string( text ).kids.map( tree => this.$.$mol_tree2_to_json(tree.struct('*')) )
			return json as $hyoo_scout_gist[]
		}

		key( key : string ) {
			return key
		}

		gists_title() {
			return `${ super.gists_title() } (${ this.gist_links().length } шт)`
		}

		@ $mol_mem
		gists_favorite( next? : boolean ) {
			return this.$.$mol_state_local.value( `${ this }.gists_favorite()` , next ) || false
		}

		@ $mol_mem_key
		gist_favorite( id : string , next? : boolean ) {
			return this.$.$mol_state_local.value( `${ this }.gist_favorite(${ id })` , next ) || false
		}

		@ $mol_mem
		gists_favorite_duration() {
			
			const dur = this.data()
			.filter( gist => this.gist_favorite( gist.title ) )
			.reduce( ( sum , gist )=> sum + parseInt( gist.tags['Длительность'][0] ) , 0 )
			
			return dur ? `${ dur } мин` : ''
		}

		@ $mol_mem
		gists_favorite_label() {
			return this.gists_favorite_duration() ? [ this.Gists_favorite_duration() ] : []
		}			

		gist_links() {

			let gists = this.data()

			if( this.gists_favorite() ) {

				gists = gists.filter( gist => this.gist_favorite( gist.title ) )
			
			} else {
			
				gists = gists.filter( gist => {

					const tags = gist.tags
					
					aspect : for( const aspect of Object.keys( tags ) as ( keyof typeof tags )[] ) {

						for( const tag of tags[ aspect ] ) {
							if( this.filter_tag_checked({ aspect , tag }) ) continue aspect
						}
						
						return false
					}
					
					return true
				} )
				
			}

			const filtered = gists.filter( $mol_match_text( this.gists_filter_query() , gist => [ gist.title , gist.content ] ) )
			
			filtered.sort( $mol_compare_text( gist => gist.title ) )
			
			return filtered.map( gist => this.Gist_link( gist.title ) )
		}

		@ $mol_mem_key
		gist( id : string ) {
			return this.data().find( gist => gist.title === id )
		}

		gist_icon( id : string ) {
			return this.gist( id )!.icon
		}

		gist_title( id : string ) {
			return this.gist( id )!.title
		}

		gist_content( id : string ) {
			return this.gist( id )!.content
		}

		tag_title( key : { aspect : string , tag : string } ) {
			return key.tag
		}

		gist_aspects( id : string ) {
			return Object.keys( this.gist( id )!.tags ).map( aspect => this.Gist_aspect( aspect ) )
		}

		gist_remarks( id : string , next? : string ) {
			return this.$.$mol_state_local.value( `${ this }.gist_remarks(${ JSON.stringify( id ) })` , next ) || ''
		}

		gist_aspect_tags( aspect : keyof $hyoo_scout_gist['tags'] ) {
			return this.gist_current()!.tags[ aspect ].map( ( tag : string ) => this.Gist_tag({ aspect , tag }) )
		}

		gist_current( next? : $hyoo_scout_gist | null ) {

			const id = this.$.$mol_state_arg.value( 'gist' , next && next.title )
			if( !id ) return null

			return this.gist( id )
		}

		filter_aspects() {
			return ( Object.keys( $hyoo_scout_gist.make({}).tags ) as ( keyof $hyoo_scout_gist['tags'] )[] )
			.filter( aspect => this.filter_aspect_tags( aspect ).length > 1 )
			.map( aspect => this.Filter_aspect( aspect ) )
		}

		@ $mol_mem_key
		filter_aspect_tags( aspect : keyof $hyoo_scout_gist['tags'] ) {

			const values = new Set< string >()
			
			for( const gist of this.data() ) {
				for( const value of gist.tags[ aspect ] ) {
					values.add( value )
				}
			}

			return [ ... values ]
			.sort( $mol_compare_text( tag => tag ) )
			.map( ( tag : string ) => this.Filter_tag({ aspect , tag }) )
		}

		@ $mol_mem_key
		filter_tag_checked( key : { aspect : string , tag : string } , next? : boolean ) {
			if( next !== undefined ) new $mol_defer( ()=> {
				this.gist_current( null )
				this.Gists().Body().scroll_top( 0 )
			} )
			next = this.$.$mol_state_local.value( `${ this }.filter_tag_checked(${ JSON.stringify( key ) })` , next ) ?? true
			if( next == null ) next = super.filter_tag_checked( key )
			return next
		}

		suggest() {
			return this.$.$mol_state_arg.value( 'suggest' ) !== null
		}

		pages() {
			return [
				this.Filter() ,
				this.Gists() ,
				... this.gist_current() ? [ this.Gist( this.gist_current()!.title ) ] : [] ,
				... this.suggest() ? [ this.Suggest() ] : [] ,
			]
		}

	}
}
